const TelegramApi = require("node-telegram-bot-api");

const api = "5198351306:AAHQn8OM_VujZd7Igj8nn8hm5yyncBRGjjE";

const bot = new TelegramApi(api, { polling: true });

bot.setMyCommands([
  { command: "/start", description: "botni boshlash" },
  { command: "/info", description: "bu malumotlaringiz" },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const name = msg.chat.first_name;

  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      `Assalomu alaykum ${name} Siz Samandar akani telegram botiga hush kelibsiz`
    );
    await bot.sendSticker(
      chatId,
      "https://tlgrm.eu/_/stickers/8a1/9aa/8a19aab4-98c0-37cb-a3d4-491cb94d7e12/2.webp"
    );
    console.log(msg);
  } else {
    bot.sendMessage(chatId, "salom");
  }
});
