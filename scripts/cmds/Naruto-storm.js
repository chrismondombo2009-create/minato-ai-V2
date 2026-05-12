const characters = [
  {
    name: "ʚʆɞ minato ネ",
    power: 89,
    basic: "pouvoir de Mark Zuckerberg",
    ultimate: " attaque +coup  Géant 🌪️"
  },
  {
    name: "Naruto (Mode Ermite)",
    power: 60,
    basic: "Rasengan Géant 🌪️",
    ultimate: "Futon Rasenshuriken 🌪️💨"
  },
  {
    name: "Naruto (Rikudo)",
    power: 70,
    basic: "Orbe Truth Seeker ⚫",
    ultimate: "Bijuu Mode Rasenshuriken 🦊🌪️"
  },
  {
    name: "Naruto (Baryon Mode)",
    power: 85,
    basic: "Punch Ultra Rapide ⚡",
    ultimate: "Explosion Chakra Nucléaire ☢️"
  },
  {
    name: "Sasuke Uchiha",
    power: 60,
    basic: "Chidori ⚡",
    ultimate: "Kirin ⚡🌩️"
  },
  {
    name: "Sasuke (Taka)",
    power: 65,
    basic: "Chidori Nagashi ⚡💧",
    ultimate: "Susano'o 💀"
  },
  {
    name: "Sasuke (Rinnegan)",
    power: 70,
    basic: "Amaterasu 🔥",
    ultimate: "Indra's Arrow ⚡🏹"
  },
  {
    name: "Kakashi Hatake",
    power: 60,
    basic: "Raikiri ⚡",
    ultimate: "Kamui 🌀"
  },
  {
    name: "Kakashi (DMS)",
    power: 75,
    basic: "Kamui Raikiri ⚡🌀",
    ultimate: "Susano'o Parfait 💠"
  },
  {
    name: "Minato Namikaze",
    power: 80,
    basic: "Hiraishin Rasengan ⚡🌀",
    ultimate: "Mode Kyuubi 🦊"
  },
  {
    name: "Hashirama Senju",
    power: 70,
    basic: "Foret Naissante 🌳",
    ultimate: "Art Senin 🌿"
  },
  {
    name: "Tobirama Senju",
    power: 60,
    basic: "Suiton: Dragon 🌊",
    ultimate: "Edo Tensei ⚰️"
  },
  {
    name: "Tsunade",
    power: 60,
    basic: "Coup Surprenant 💥",
    ultimate: "Sceau Byakugō 💎"
  },
  {
    name: "Hiruzen Sarutobi",
    power: 65,
    basic: "5 Éléments 🌍🔥💧🌪️⚡",
    ultimate: "Shinigami Seal ☠️"
  },
  {
    name: "Pain (Tendo)",
    power: 68,
    basic: "Shinra Tensei ⬇️",
    ultimate: "Chibaku Tensei ⬆️"
  },
  {
    name: "Konan",
    power: 55,
    basic: "Danse de Papier 📄",
    ultimate: "Mer de Papiers Explosifs 💥📄"
  },
  {
    name: "Nagato",
    power: 68,
    basic: "Absorption Chakra 🌀",
    ultimate: "Réanimation Universelle ⚰️"
  },
  {
    name: "Deidara",
    power: 60,
    basic: "Argile Explosive C2 💣",
    ultimate: "Auto-Destruction C0 💥"
  },
  {
    name: "Kakuzu",
    power: 60,
    basic: "Futon - Zankokuhaha 💨",
    ultimate: "Cœurs Enchaînés 💔"
  },
  {
    name: "Hidan",
    power: 50,
    basic: "Attaque Rituelle ⛧",
    ultimate: "Rituel Jashin ⛧"
  },
  {
    name: "Sasori",
    power: 58,
    basic: "Marionnettes 🎭",
    ultimate: "Armée des 100 🎭"
  },
  {
    name: "Itachi Uchiha",
    power: 70,
    basic: "Tsukuyomi 🌙",
    ultimate: "Amaterasu + Susano'o 🔥💀"
  },
  {
    name: "Kisame Hoshigaki",
    power: 62,
    basic: "Requin Géant 🦈",
    ultimate: "Fusion avec Samehada 🦈"
  },
  {
    name: "Orochimaru",
    power: 65,
    basic: "Poignée du Serpent Spectral 🐍",
    ultimate: "Mode Sage Blanc 🐍"
  },
  {
    name: "Asuma Sarutobi",
    power: 55,
    basic: "Lames de Chakra 🔪",
    ultimate: "Furie Mode 💨"
  },
  {
    name: "Maito Gai",
    power: 70,
    basic: "Feu de la Jeunesse 🔥",
    ultimate: "8ème Porte - Nuit de la Mort 💀"
  },
  {
    name: "Kurenai Yuhi",
    power: 45,
    basic: "Genjutsu 🌸",
    ultimate: "Piège Floral 🌸"
  },
  {
    name: "Gaara",
    power: 68,
    basic: "Sable Mouvant 🏜️",
    ultimate: "Armure + Sable Funéraire ⚔️🏜️"
  },
  {
    name: "Temari",
    power: 58,
    basic: "Vent Tranchant 🌪️",
    ultimate: "Danse de la Faucheuse 🌪️"
  },
  {
    name: "Kankuro",
    power: 56,
    basic: "Poupée Karasu 🎭",
    ultimate: "Piège des 3 Marionnettes 🎭"
  },
  {
    name: "Hinata Hyuga",
    power: 52,
    basic: "Paume du Hakkē ✋",
    ultimate: "Protection des 64 Coups ✋✋"
  },
  {
    name: "Neji Hyuga",
    power: 60,
    basic: "Tourbillon Divin 🌪️",
    ultimate: "64 Points du Hakkē ✋"
  },
  {
    name: "Rock Lee",
    power: 65,
    basic: "Lotus Recto 🌸",
    ultimate: "6ème Porte - Paon du Midi 🦚"
  },
  {
    name: "Shikamaru Nara",
    power: 60,
    basic: "Ombre Manipulatrice 🕳️",
    ultimate: "Piège Stratégique Total 🕳️"
  },
  {
    name: "Sakura Haruno",
    power: 60,
    basic: "Coup Supersonique 💥",
    ultimate: "Sceau Byakugō Déchaîné 💎"
  },
  {
    name: "Madara Uchiha",
    power: 75,
    basic: "Susano'o 💀",
    ultimate: "Limbo + Météores ☄️"
  },
  {
    name: "Madara (Rikudo)",
    power: 85,
    basic: "Truth Seeker Orbs ⚫",
    ultimate: "Infinite Tsukuyomi 🌙"
  },
  {
    name: "Obito Uchiha",
    power: 70,
    basic: "Kamui 🌀",
    ultimate: "Jūbi Mode 🔥"
  },
  {
    name: "Obito (Rikudo)",
    power: 80,
    basic: "Gunbai Uchiwa 🌀",
    ultimate: "Shinra Tensei ⬇️"
  },
  {
    name: "Zetsu",
    power: 40,
    basic: "Attaque Furtive 🥷",
    ultimate: "Infection de Corps 🦠"
  },
  {
    name: "Kaguya Otsutsuki",
    power: 78,
    basic: "Portail Dimensionnel 🌀",
    ultimate: "Os Cendré + Expansion Divine ☄️"
  },
  {
    name: "Ay (Raikage)",
    power: 66,
    basic: "Coup Raikage ⚡",
    ultimate: "Mode Foudre ⚡"
  },
  {
    name: "Mei Terumi",
    power: 60,
    basic: "Acide Bouillant 🧪",
    ultimate: "Vapeur Destructrice 💨"
  },
  {
    name: "Onoki",
    power: 65,
    basic: "Technique de Légèreté 🪶",
    ultimate: "Jinton: Dématérialisation 💎"
  },
  {
    name: "Killer Bee",
    power: 68,
    basic: "Lames à 8 Sabres ⚔️",
    ultimate: "Mode Hachibi 🐙"
  },
  {
    name: "Boruto Uzumaki",
    power: 60,
    basic: "Rasengan Invisible 👻🌀",
    ultimate: "Karma Activé + Jōgan 👁️"
  },
  {
    name: "Boruto (Karma)",
    power: 75,
    basic: "Rasengan Spatial 🌌",
    ultimate: "Pouvoir Otsutsuki 🌙"
  },
  {
    name: "Kawaki",
    power: 70,
    basic: "Transformation Morpho ⚔️",
    ultimate: "Karma Full Power 💀"
  },
  {
    name: "Sarada Uchiha",
    power: 58,
    basic: "Chidori ⚡",
    ultimate: "Sharingan 3 Tomoe 🔴"
  },
  {
    name: "Mitsuki",
    power: 60,
    basic: "Serpent Blanc 🐍",
    ultimate: "Mode Sage 🐍"
  },
  {
    name: "Jigen",
    power: 82,
    basic: "Rods Dimensionnels ⚡",
    ultimate: "Transformation Karma 🔥"
  },
  {
    name: "Isshiki Otsutsuki",
    power: 90,
    basic: "Sukunahikona 🔍",
    ultimate: "Daikokuten ⏳"
  },
  {
    name: "Momoshiki Otsutsuki",
    power: 84,
    basic: "Rasengan Géant 🌪️",
    ultimate: "Absorption Chakra 🌀"
  },
  {
    name: "Indra Otsutsuki",
    power: 78,
    basic: "Chidori Ultime ⚡",
    ultimate: "Susano'o Parfait 💠"
  },
  {
    name: "Asura Otsutsuki",
    power: 76,
    basic: "Rasengan Originel 🌀",
    ultimate: "Mode Sage des Six Chemins ☯️"
  },
  {
    name: "Hagoromo Otsutsuki",
    power: 88,
    basic: "Creation of All Things 🌍",
    ultimate: "Six Paths Senjutsu ☯️"
  },
  {
    name: "Hamura Otsutsuki",
    power: 80,
    basic: "Tenseigan Activation ✨",
    ultimate: "Moon Sword Slash 🌙"
  }
];

const damageSystem = {
  basic: { min: 8, max: 15, chakraCost: 0 },
  special: { min: 15, max: 25, chakraCost: 20 },
  ultimate: { min: 30, max: 45, chakraCost: 75, failChance: 0.3 },
  charge: { chakraGain: 25 }
};

function getHealthColor(hp) {
  if (hp === 100) return "💚";
  if (hp >= 85) return "💚";
  if (hp >= 55) return "💛";
  if (hp >= 25) return "🧡";
  if (hp > 0) return "❤️";
  return "💔";
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gameState = {};

module.exports = {
  config: { 
    name: "naruto-storm", 
    version: "4.2",
    author: "Delfa •|• ꗇ︱Blẳȼk 义 ",
    role: 0,
    category: "game",
    shortDescription: "Jeu Naruto ultime",
    longDescription: "Combat Naruto avec système de chakra avancé",
    guide: "{p}naruto-storm"
  },

  onStart: async function ({ message, event }) {
    const threadID = event.threadID;

    gameState[threadID] = {
      step: "waiting_start",
      players: {},
      turn: null,
      p1Character: null,
      p2Character: null,
      p1HP: 100,
      p2HP: 100,
      p1Chakra: 100,
      p2Chakra: 100,
      chakraRegen: 5,
      defending: false,
      lastAction: null,
      lastPlayer: null
    };

    await message.reply({
      body: `🎮 𝗡𝗔𝗥𝗨𝗧𝗢-𝗦𝗧𝗢𝗥𝗠 𝗩𝟰.𝟮\n━━━━━━━━━━━━━━\n𝗘𝗻𝘃𝗼𝘆𝗲𝘇 "start" 𝗽𝗼𝘂𝗿 𝗰𝗼𝗺𝗺𝗲𝗻𝗰𝗲𝗿`,
      attachment: await global.utils.getStreamFromURL("https://i.ibb.co/1Gdycvds/image.jpg")
    });
  },

  onChat: async function ({ event, message, usersData }) {
    const threadID = event.threadID;
    const userID = event.senderID;
    const body = event.body.toLowerCase();

    if (!gameState[threadID]) return;
    const state = gameState[threadID];

    if (state.step !== "waiting_start" && state.step !== "choose_p1" && state.step !== "choose_p2" && 
        userID !== state.players.p1 && userID !== state.players.p2) {
      return;
    }

    if (body === 'fin') {
      delete gameState[threadID];
      return message.reply("🔄 Partie terminée. Envoyez 'start' pour recommencer.");
    }

    if (state.step === "waiting_start" && body === "start") {
      state.step = "choose_p1";
      state.players.p1 = userID;
      return message.reply("🧙 𝗝𝗼𝘂𝗲𝘂𝗿 𝟭\n𝗧𝗮𝗽𝗲𝘇 'p1' 𝗽𝗼𝘂𝗿 𝘀𝗲́𝗹𝗲𝗰𝘁𝗶𝗼𝗻𝗻𝗲𝗿 𝘃𝗼𝘁𝗿𝗲 𝗽𝗲𝗿𝘀𝗼𝗻𝗻𝗮𝗴𝗲");
    }

    if (state.step === "choose_p1" && body === 'p1') {
      if (userID !== state.players.p1) return;
      state.step = "choose_p2";
      return message.reply("🧝 𝗝𝗼𝘂𝗲𝘂𝗿 𝟮\n𝗧𝗮𝗽𝗲𝘇 'p2' 𝗽𝗼𝘂𝗿 𝘃𝗼𝘂𝘀 𝗶𝗻𝘀𝗰𝗿𝗶𝗿𝗲");
    }

    if (state.step === "choose_p2" && body === 'p2') {
      if (userID === state.players.p1) {
        return message.reply("❌ Vous ne pouvez pas être les deux joueurs !");
      }
      state.players.p2 = userID;
      state.step = "choose_characters_p1";
      
      let characterList = "🎭 𝗖𝗛𝗢𝗜𝗦𝗜𝗦𝗦𝗘𝗭 𝗩𝗢𝗧𝗥𝗘 𝗣𝗘𝗥𝗦𝗢𝗡𝗡𝗔𝗚𝗘\n━━━━━━━━━━━━━━\n";
      characterList += characters.map((char, i) => 
        `${i + 1}. ${char.name} (${char.power}★)`
      ).join("\n");
      
      const userInfo = await usersData.get(state.players.p1);
      return message.reply({
        body: characterList + `\n\n@${userInfo.name} 𝗝𝗼𝘂𝗲𝘂𝗿 𝟭, 𝗿𝗲́𝗽𝗼𝗻𝗱𝗲𝘇 𝗮𝘃𝗲𝗰 𝗹𝗲 𝗻𝘂𝗺𝗲́𝗿𝗼 𝗱𝘂 𝗽𝗲𝗿𝘀𝗼𝗻𝗻𝗮𝗴𝗲`,
        mentions: [{
          tag: `@${userInfo.name}`,
          id: state.players.p1
        }]
      });
    }

    if (state.step.startsWith("choose_characters")) {
      const index = parseInt(body) - 1;
      
      if (isNaN(index) || index < 0 || index >= characters.length) {
        return message.reply("❌ 𝗡𝘂𝗺𝗲́𝗿𝗼 𝗶𝗻𝘃𝗮𝗹𝗶𝗱𝗲. 𝗥𝗲́𝗲𝘀𝘀𝗮𝘆𝗲𝘇");
      }

      if (state.step === "choose_characters_p1" && userID === state.players.p1) {
        state.p1Character = characters[index];
        state.step = "choose_characters_p2";
        const userInfo = await usersData.get(state.players.p2);
        return message.reply({
          body: `✅ 𝗝𝗼𝘂𝗲𝘂𝗿 𝟭: ${state.p1Character.name}\n\n@${userInfo.name} 𝗝𝗼𝘂𝗲𝘂𝗿 𝟮, 𝗰𝗵𝗼𝗶𝘀𝗶𝘀𝘀𝗲𝘇 𝘃𝗼𝘁𝗿𝗲 𝗽𝗲𝗿𝘀𝗼𝗻𝗻𝗮𝗴𝗲`,
          mentions: [{
            tag: `@${userInfo.name}`,
            id: state.players.p2
          }]
        });
      }

      if (state.step === "choose_characters_p2" && userID === state.players.p2) {
        state.p2Character = characters[index];
        state.turn = "p1";
        state.step = "battle";
        
        const p1Info = await usersData.get(state.players.p1);
        const p2Info = await usersData.get(state.players.p2);
        
        const battleStartMsg = `⚔️ 𝗖𝗢𝗠𝗕𝗔𝗧 𝗗𝗘𝗕𝗨𝗧\n━━━━━━━━━━━━━━\n` +
          `✦ ${state.p1Character.name} (${p1Info.name}) 𝗩𝗦 ${state.p2Character.name} (${p2Info.name})\n\n` +
          `𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝗲𝘀 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲𝘀:\n` +
          `» 𝗮 - 𝗔𝘁𝘁𝗮𝗾𝘂𝗲 𝗯𝗮𝘀𝗶𝗾𝘂𝗲 (${damageSystem.basic.min}-${damageSystem.basic.max}%)\n` +
          `» 𝗯 - 𝗧𝗲𝗰𝗵𝗻𝗶𝗾𝘂𝗲 𝘀𝗽é𝗰𝗶𝗮𝗹𝗲 (-${damageSystem.special.chakraCost} chakra)\n` +
          `» 𝘅 - 𝗧𝗲𝗰𝗵𝗻𝗶𝗾𝘂𝗲 𝘂𝗹𝘁𝗶𝗺𝗲 (-${damageSystem.ultimate.chakraCost} chakra)\n` +
          `» 𝗰 - 𝗖𝗵𝗮𝗿𝗴𝗲𝗿 𝗰𝗵𝗮𝗸𝗿𝗮 (+${damageSystem.charge.chakraGain}%)\n` +
          `» 𝗱 - 𝗗é𝗳𝗲𝗻𝘀𝗲 (𝗿é𝗱𝘂𝗶𝘁 𝗹𝗲𝘀 𝗱é𝗴â𝘁𝘀)\n\n` +
          `@${p1Info.name} 𝗝𝗼𝘂𝗲𝘂𝗿 𝟭, 𝗰'𝗲𝘀𝘁 à 𝘁𝗼𝗶 𝗱𝗲 𝗷𝗼𝘂𝗲𝗿 !`;
        
        return message.reply({
          body: battleStartMsg,
          mentions: [{
            tag: `@${p1Info.name}`,
            id: state.players.p1
          }]
        });
      }
      return;
    }

    if (state.step === "battle") {
      const currentPlayer = state.turn === "p1" ? state.players.p1 : state.players.p2;
      if (userID !== currentPlayer) return;

      // Empêcher le spam de la commande 'c'
      if (body === 'c' && state.lastAction === 'c' && state.lastPlayer === userID) {
        return message.reply("❌ Vous ne pouvez pas charger votre chakra deux fois de suite !");
      }

      const attacker = state.turn === "p1" ? state.p1Character : state.p2Character;
      const defender = state.turn === "p1" ? state.p2Character : state.p1Character;
      const hpKey = state.turn === "p1" ? "p2HP" : "p1HP";
      const chakraKey = state.turn === "p1" ? "p1Chakra" : "p2Chakra";

      let damage = 0;
      let tech = "Attaque basique";
      let effect = "👊";
      let chakraUsed = 0;
      let missed = false;
      let chargeMessage = "";

      switch (body) {
        case 'a':
          damage = randomBetween(damageSystem.basic.min, damageSystem.basic.max);
          tech = "Attaque basique";
          effect = "👊";
          break;

        case 'b':
          if (state[chakraKey] < damageSystem.special.chakraCost) {
            missed = true;
          } else {
            damage = randomBetween(damageSystem.special.min, damageSystem.special.max);
            chakraUsed = damageSystem.special.chakraCost;
            tech = attacker.basic;
            effect = attacker.basic.split(' ').pop();
          }
          break;

        case 'x':
          if (state[chakraKey] < damageSystem.ultimate.chakraCost) {
            missed = true;
          } else {
            chakraUsed = damageSystem.ultimate.chakraCost;
            if (Math.random() < damageSystem.ultimate.failChance) {
              missed = true;
              tech = attacker.ultimate + " (échoué)";
              effect = "❌";
            } else {
              damage = randomBetween(damageSystem.ultimate.min, damageSystem.ultimate.max);
              tech = attacker.ultimate;
              effect = attacker.ultimate.split(' ').pop();
            }
          }
          break;

        case 'c':
          state[chakraKey] = Math.min(100, state[chakraKey] + damageSystem.charge.chakraGain);
          chargeMessage = `🔋 ${attacker.name} accumule +${damageSystem.charge.chakraGain}% de chakra !`;
          state.lastAction = 'c';
          state.lastPlayer = userID;
          state.turn = state.turn === "p1" ? "p2" : "p1";
          return await sendBattleMessage();
          
        case 'd':
          state.defending = state.turn;
          state.lastAction = 'd';
          state.lastPlayer = userID;
          state.turn = state.turn === "p1" ? "p2" : "p1";
          return message.reply(`🛡️ ${attacker.name} se met en position défensive !`);

        default:
          return message.reply("❌ Commande invalide\n» a - Attaque\n» b - Technique\n» x - Ultime\n» c - Charger\n» d - Défense");
      }

      if (!missed) {
        if (state.defending && state.defending !== state.turn) {
          damage = Math.floor(damage * 0.6);
          tech += " (défendu)";
        }

        state[chakraKey] -= chakraUsed;
        state[chakraKey] = Math.max(0, state[chakraKey]);
        state[hpKey] -= damage;
        state[hpKey] = Math.max(0, state[hpKey]);
      }

      state.lastAction = body;
      state.lastPlayer = userID;

      if (state.turn === "p1") {
        state.p1Chakra = Math.min(100, state.p1Chakra + state.chakraRegen);
      } else {
        state.p2Chakra = Math.min(100, state.p2Chakra + state.chakraRegen);
      }

      async function sendBattleMessage() {
        let msg = "";

        if (body !== 'c' && !missed) {
          msg += `⚡ ${attacker.name} utilise ${tech} ${effect}\n`;
          msg += `💥 Inflige ${damage}% de dégâts à ${defender.name} !\n\n`;
        } else if (missed) {
          msg += `⚡ ${attacker.name} tente ${tech}...\n`;
          msg += `❌ Échoue ! (${state[chakraKey] < damageSystem.ultimate.chakraCost ? "Chakra insuffisant" : "Technique ratée"})\n\n`;
        }

        msg += `━━━━━━━━━━━━━━\n`;
        msg += `${getHealthColor(state.p1HP)}|${state.p1Character.name}: HP ${state.p1HP}%\n`;
        msg += `💙| Chakra ${state.p1Chakra}%\n`;
        msg += `━━━━━━━━━━━━━━\n`;
        msg += `${getHealthColor(state.p2HP)}|${state.p2Character.name}: HP ${state.p2HP}%\n`;
        msg += `💙| Chakra ${state.p2Chakra}%\n`;
        msg += `━━━━━━━━━━━━━━\n`;

        if (chargeMessage) msg += `${chargeMessage}\n`;

        if (state.p1HP <= 0 || state.p2HP <= 0) {
          const winner = state.p1HP <= 0 ? state.p2Character.name : state.p1Character.name;
          msg += `🏆 𝗩𝗜𝗖𝗧𝗢𝗜𝗥𝗘 𝗗𝗘 ${winner} !\n`;
          msg += `𝗙𝗶𝗻 𝗱𝘂 𝗰𝗼𝗺𝗯𝗮𝘁. 𝗧𝗮𝗽𝗲𝘇 'fin' 𝗽𝗼𝘂𝗿 𝗿𝗲𝗰𝗼𝗺𝗺𝗲𝗻𝗰𝗲𝗿.`;
          delete gameState[threadID];
        } else {
          state.turn = state.turn === "p1" ? "p2" : "p1";
          state.defending = false;
          const nextPlayer = state.turn === "p1" ? state.players.p1 : state.players.p2;
          const userInfo = await usersData.get(nextPlayer);
          msg += `@${userInfo.name} 𝗝𝗼𝘂𝗲𝘂𝗿 ${state.turn === "p1" ? "1" : "2"}, 𝗰'𝗲𝘀𝘁 à 𝘁𝗼𝗶 𝗱𝗲 𝗷𝗼𝘂𝗲𝗿 !`;
        }

        const nextPlayer = state.turn === "p1" ? state.players.p1 : state.players.p2;
        const userInfo = await usersData.get(nextPlayer);
        
        return message.reply({
          body: msg,
          mentions: [{
            tag: `@${userInfo.name}`,
            id: nextPlayer
          }]
        });
      }

      return await sendBattleMessage();
    }
  }
};
