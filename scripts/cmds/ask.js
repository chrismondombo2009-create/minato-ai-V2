const axios = require('axios');
const fs = require('fs');
const path = require('path');

const UPoLPrefix = ['Sonic'];

module.exports = {
  config: {
    name: 'sonic',
    version: '2.1.0',
    author: "L'Uchiha Perdu & ʚʆɞ Sømå Sønïč ʚʆɞ",
    countDown: 5,
    role: 0,
    shortDescription: "IA Ultime avec Génération d'Images Text2",
    longDescription: "IA avec outils terrifiants, génération et édition d'images avec réponse texte.",
    category: "IA",
    guide: "{pn} [question] ou répondre à une image/audio/vidéo"
  },

  conversationHistory: {},

  applyStyle: (text) => {
    const normalToBold = {
      'A': '𝗔','B': '𝗕','C': '𝗖','D': '𝗗','E': '𝗘','F': '𝗙','G': '𝗚','H': '𝗛','I': '𝗜','J': '𝗝',
      'K': '𝗞','L': '𝗟','M': '𝗠','N': '𝗡','O': '𝗢','P': '𝗣','Q': '𝗤','R': '𝗥','S': '𝗦','T': '𝗧',
      'U': '𝗨','V': '𝗩','W': '𝗪','X': '𝗫','Y': '𝗬','Z': '𝗭',
      'a': '𝗮','b': '𝗯','c': '𝗰','d': '𝗱','e': '𝗲','f': '𝗳','g': '𝗴','h': '𝗵','i': '𝗶','j': '𝗷',
      'k': '𝘬','l': '𝘭','m': '𝗺','n': '𝗻','o': '𝗼','p': '𝗽','q': '𝗾','r': '𝗿','s': '𝘀','t': '𝘵',
      'u': '𝘂','v': '𝘃','w': '𝘄','x': '𝘅','y': '𝘆','z': '𝘇'
    };

    const normalToItalic = {
      'A': '𝘈','B': '𝘉','C': '𝘊','D': '𝘋','E': '𝘌','F': '𝘍','G': '𝘎','H': '𝘏','I': '𝘐','J': '𝘑',
      'K': '𝘒','L': '𝘓','M': '𝘔','N': '𝘕','O': '𝘖','P': '𝘗','Q': '𝘘','R': '𝘙','S': '𝘚','T': '𝘛',
      'U': '𝘜','V': '𝘝','W': '𝘞','X': '𝘟','Y': '𝘠','Z': '𝘡',
      'a': '𝘢','b': '𝘣','c': '𝘤','d': '𝘥','e': '𝘦','f': '𝘧','g': '𝘨','h': '𝘩','i': '𝘪','j': '𝘫',
      'k': '𝘬','l': '𝘭','m': '𝘮','n': '𝘯','o': '𝘰','p': '𝘱','q': '𝘲','r': '𝘳','s': '𝘴','t': '𝘵',
      'u': '𝘶','v': '𝘷','w': '𝘸','x': '𝘹','y': '𝘺','z': '𝘻'
    };

    let transformed = text;
    transformed = transformed.replace(/\*\*(.*?)\*\*/g, (m, p1) =>
      p1.split('').map(c => normalToBold[c] || c).join('')
    );
    transformed = transformed.replace(/\*(.*?)\*(?:\s|$)/g, (m, p1) =>
      p1.split('').map(c => normalToItalic[c] || c).join('') + ' '
    );
    return transformed;
  },

  pcmToWav: function (pcmBuffer) {
    const sampleRate = 24000;
    const channels = 1;
    const bitDepth = 16;
    const byteRate = sampleRate * channels * (bitDepth / 8);
    const blockAlign = channels * (bitDepth / 8);
    const dataSize = pcmBuffer.length;

    const header = Buffer.alloc(44);
    header.write('RIFF', 0, 4);
    header.writeUInt32LE(36 + dataSize, 4);
    header.write('WAVE', 8, 4);
    header.write('fmt ', 12, 4);
    header.writeUInt32LE(16, 16);
    header.writeUInt16LE(1, 20);
    header.writeUInt16LE(channels, 22);
    header.writeUInt32LE(sampleRate, 24);
    header.writeUInt32LE(byteRate, 28);
    header.writeUInt16LE(blockAlign, 32);
    header.writeUInt16LE(bitDepth, 34);
    header.write('data', 36, 4);
    header.writeUInt32LE(dataSize, 40);

    return Buffer.concat([header, pcmBuffer]);
  },

  onStart: async function () {},

  onChat: async function ({ message, event, api }) {
    const prefix = UPoLPrefix.find(p => event.body?.toLowerCase().startsWith(p.toLowerCase()));
    if (!prefix) return;

    const query = event.body.slice(prefix.length).trim();
    const userId = event.senderID.toString();

    let name = 'Utilisateur';
    try {
      const info = await api.getUserInfo(userId);
      name = info[userId]?.name || name;
    } catch {}

    let imageUrl = null;
    let audioUrl = null;
    let videoUrl = null;
    let youtubeUrl = null;
    let isReplyToImage = false;
    let repliedImageIsGenerated = false;

    if (event.messageReply) {
      if (event.messageReply.attachments && event.messageReply.attachments.length > 0) {
        const att = event.messageReply.attachments[0];
        const url = att.url;

        if (att.type === 'photo' || att.type === 'sticker' || att.type === 'animated_image') {
          imageUrl = url;
          isReplyToImage = true;
          const repliedMessage = event.messageReply.body || '';
          repliedImageIsGenerated =
            repliedMessage.includes('✧═════•❁❀❁•═════✧') ||
            repliedMessage.includes('Image générée') ||
            repliedMessage.includes('🎨');
        } else if (att.type === 'audio') {
          audioUrl = url;
        } else if (att.type === 'video') {
          if (url.includes('youtube.com') || url.includes('youtu.be')) {
            youtubeUrl = url;
          } else {
            videoUrl = url;
          }
        }
      }
    }

    if (!query && !imageUrl && !audioUrl && !videoUrl && !youtubeUrl) {
      return message.reply(`Pose une question ${name} !`);
    }

    if (!this.conversationHistory[userId]) this.conversationHistory[userId] = [];

    const payload = {
      query,
      key: 'rodrigue_boss_dev_uchiha',
      name_user: name,
      history: this.conversationHistory[userId].slice(-12),
      uid: userId,
      imageUrl,
      audioUrl,
      videoUrl,
      youtubeUrl,
      isReplyToImage,
      repliedImageIsGenerated
    };

    try {
      const res = await axios.post(
        'https://uchiha-perdu-api-models.vercel.app/api/sonic',
        payload,
        { timeout: 90000 }
      );

      const data = res.data;
      let responseText = data.response || '';
      responseText = this.applyStyle(responseText);

      if (data.audio && data.audio.tool === 'voice' && responseText === '') {
      } else if (responseText) {
        const msg = `✧═════•❁❀❁•═════✧\n${responseText}\n✧═════•❁❀❁•═════✧`;
        await message.reply(msg);
      }

      if (data.images && data.images.length > 0) {
        for (const imageUrl of data.images) {
          try {
            const imageResponse = await axios({
              url: imageUrl,
              method: 'GET',
              responseType: 'stream',
              timeout: 10000
            });
            await message.reply({ attachment: imageResponse.data });
            await new Promise(r => setTimeout(r, 1500));
          } catch {}
        }
      }

      if (data.generated_image && data.generated_image.url) {
        try {
          let imageUrl = data.generated_image.url;

          if (imageUrl.startsWith('data:image/')) {
            const base64Data = imageUrl.split(',')[1];
            const imageBuffer = Buffer.from(base64Data, 'base64');
            const tempFilePath = path.join(__dirname, `temp_gen_${Date.now()}.jpg`);
            fs.writeFileSync(tempFilePath, imageBuffer);
            await message.reply({ attachment: fs.createReadStream(tempFilePath) });
            fs.unlinkSync(tempFilePath);
          } else {
            const imageResponse = await axios({
              url: imageUrl,
              method: 'GET',
              responseType: 'stream',
              timeout: 30000
            });
            await message.reply({ attachment: imageResponse.data });
          }
        } catch {
          await message.reply("L'image générée n'a pas pu être envoyée.");
        }
      }

      if (data.audio && data.audio_base64) {
        try {
          const pcmBuffer = Buffer.from(data.audio_base64, 'base64');
          const wavBuffer = this.pcmToWav(pcmBuffer);
          const tempFilePath = path.join(__dirname, `temp_audio_${Date.now()}.wav`);
          fs.writeFileSync(tempFilePath, wavBuffer);
          await message.reply({ attachment: fs.createReadStream(tempFilePath) });
          fs.unlinkSync(tempFilePath);
        } catch {
          await message.reply("L'audio n'a pas pu être envoyé.");
        }
      }

      if (data.media_url) {
        try {
          const mediaResponse = await axios({
            url: data.media_url,
            method: 'GET',
            responseType: 'stream',
            timeout: 90000
          });

          const ext = data.media_type || 'mp4';
          const tempFilePath = path.join(__dirname, `temp_media_${Date.now()}.${ext}`);
          const writeStream = fs.createWriteStream(tempFilePath);
          mediaResponse.data.pipe(writeStream);

          await new Promise((resolve, reject) => {
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
          });

          await message.reply({ attachment: fs.createReadStream(tempFilePath) });
          fs.unlinkSync(tempFilePath);
        } catch {
          await message.reply("Le média n'a pas pu être envoyé.");
        }
      }

      if (data.audio && data.audio.tool === 'voice') {
        this.conversationHistory[userId].push(
          { role: 'user', content: query || '[demande audio]' },
          { role: 'assistant', content: data.audio.text || '[audio]' }
        );
      } else {
        this.conversationHistory[userId].push(
          { role: 'user', content: query || '[média]' },
          { role: 'assistant', content: responseText || data.audio?.text || data.media_url || '[réponse]' }
        );
      }

      if (this.conversationHistory[userId].length > 20) {
        this.conversationHistory[userId].splice(0, 2);
      }
    } catch (e) {
      let errorMsg = "Sonic en galère, réessaie 5s frère.";
      if (e.code === 'ECONNABORTED') {
        errorMsg = "Timeout - l'API prend trop de temps. Réessaie avec une requête plus simple.";
      } else if (e.response?.status === 500) {
        errorMsg = "Problème serveur, réessaie plus tard.";
      }
      await message.reply(errorMsg);
    }
  }
};