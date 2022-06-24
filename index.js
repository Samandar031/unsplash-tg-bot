// // const { Telegraf } = require("telegraf");
// const TelegramApi = require("node-telegram-bot-api");

// const { start } = require("repl");

// const api = "5198351306:AAHQn8OM_VujZd7Igj8nn8hm5yyncBRGjjE";
// const unsplashApi = `https://api.unsplash.com/photos/?client_id=${key}`;

// const key = `_zxs0wgdXXcjbmhYUmaOI4usuuCtQttL6zhRvMcQTFw`;

// const bot = new TelegramApi(api, { polling: true });

// bot.setMyCommands([
//   { command: "/start", description: "botni boshlash" },
//   { command: "/info", description: "bu malumotlaringiz" },
// ]);

// const startApi = function () {
//   bot.on("message", async (msg) => {
//     const text = msg.text;
//     const chatId = msg.chat.id;
//     const name = msg.chat.first_name;

//     if (text === "/start") {
//       await bot.sendSticker(
//         chatId,
//         "https://tlgrm.eu/_/stickers/8a1/9aa/8a19aab4-98c0-37cb-a3d4-491cb94d7e12/2.webp"
//       );
//       return bot.sendMessage(chatId, `Assalomu alaykum ${name} `);
//       console.log(chatId);
//     } else if (text == "salom") {
//       return bot.sendMessage(chatId, "salom");
//     } else {
//       return bot.sendMessage(
//         chatId,
//         `men bu narsani bilmayman ${name} tushindingmi`
//       );
//     }
//   });
// };

// startApi();

// const botI = new Telegraf(process.env.BOT_TOKEN);
// bot.start((ctx) => ctx.reply("Welcome"));
// bot.help((ctx) => ctx.reply("Send me a sticker"));
// bot.on("sticker", (ctx) => ctx.reply("👍"));
// bot.hears("hi", (ctx) => ctx.reply("Hey there"));
// bot.launch();

// ___________________ >< telegram bot >< ___________________ //

const TelegramBot = require("node-telegram-bot-api");
const Controllers = require("./controller.js");
// const { TOKEN } = require("./config.js ");
TOKEN = "5260210419:AAGsfX1ljPa7XK-iNiG7XfcfUfGVXGtmrIA";
console.log(TOKEN);
const options = {
  polling: true,
};

const bot = new TelegramBot(TOKEN, options);

bot.on("message", (message) => Controllers.MessageController(message, bot));
