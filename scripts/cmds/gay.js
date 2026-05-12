const { createCanvas, loadImage } = require("canvas");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function getFacebookID(input, api) {
    if (!input) return null;
    if (!isNaN(input)) return input;
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.com)\/(?:profile\.php\?id=)?([a-zA-Z0-9.]+)/;
    const match = input.match(regex);
    if (match) {
        const value = match[1];
        if (!isNaN(value)) return value;
        try {
            const res = await api.getUID(input);
            return res;
        } catch (e) {
            return value;
        }
    }
    return null;
}

module.exports = {
    config: {
        name: "gay",
        version: "3.0",
        author: "Itachi Soma",
        countDown: 5,
        role: 0,
        category: "fun"
    },

    onStart: async function ({ api, event, args, message }) {
        const { senderID, mentions, type, messageReply } = event;
        let id;

        if (type === "message_reply") {
            id = messageReply.senderID;
        } else if (Object.keys(mentions).length > 0) {
            id = Object.keys(mentions)[0];
        } else if (args[0]) {
            id = await getFacebookID(args[0], api);
        } else {
            id = senderID;
        }

        if (!id) return message.reply("❌ Impossible de trouver l'ID Facebook.");

        const pfpUrl = `https://graph.facebook.com/${id}/picture?width=800&height=800&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

        try {
            const response = await axios.get(pfpUrl, { responseType: "arraybuffer" });
            const img = await loadImage(Buffer.from(response.data, "utf-8"));

            const canvas = createCanvas(800, 800);
            const ctx = canvas.getContext("2d");

            ctx.save();
            ctx.beginPath();
            ctx.arc(400, 400, 390, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img, 0, 0, 800, 800);
            ctx.restore();

            const gradient = ctx.createLinearGradient(0, 0, 800, 800);
            gradient.addColorStop(0, "rgba(255, 0, 0, 0.45)");
            gradient.addColorStop(0.17, "rgba(255, 165, 0, 0.45)");
            gradient.addColorStop(0.33, "rgba(255, 255, 0, 0.45)");
            gradient.addColorStop(0.5, "rgba(0, 128, 0, 0.45)");
            gradient.addColorStop(0.67, "rgba(0, 0, 255, 0.45)");
            gradient.addColorStop(0.83, "rgba(75, 0, 130, 0.45)");
            gradient.addColorStop(1, "rgba(238, 130, 238, 0.45)");

            ctx.save();
            ctx.globalCompositeOperation = "source-atop";
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(400, 400, 390, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 20;
            ctx.beginPath();
            ctx.arc(400, 400, 390, 0, Math.PI * 2);
            ctx.stroke();

            const imgPath = path.join(__dirname, `gay_${id}.png`);
            fs.writeFileSync(imgPath, canvas.toBuffer());

            return message.reply({
                body: `WHY ARE YOU 🏳️‍🌈❔\n👤 ID: ${id}`,
                attachment: fs.createReadStream(imgPath)
            }, () => {
                if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
            });

        } catch (error) {
            return message.reply("❌ Erreur : Image introuvable ou profil privé.");
        }
    }
};