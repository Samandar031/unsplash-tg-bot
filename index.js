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
// const Controllers = require("./controller.js");
// const { TOKEN } = require("./config.js ");
TOKEN = "5260210419:AAGsfX1ljPa7XK-iNiG7XfcfUfGVXGtmrIA";
console.log(TOKEN);
const keyboards = require("./keyboard.js");

const options = {
  polling: true,
};

let step = 0;
let state = [];

const bot = new TelegramBot(TOKEN, options);

bot.on("message", async (message) => {
  step++;

  bot.setMyCommands([
    { command: "/start", description: "botni boshlash" },
    { command: "/info", description: "bu malumotlaringiz" },
  ]);

  const chat_id = message.chat.id;
  const user_id = message.from.id;
  const text = message.text;
  const first_name = message.chat.first_name;
  const user_name = message.chat.username;

  const buttonOption = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "JavaScript", callback_data: "JavaScript" },
          { text: "Python", callback_data: "Python" },
          { text: "Php", callback_data: "Php" },
        ],
        [
          { text: "C++", callback_data: "C++" },
          { text: "Java", callback_data: "Java" },
          { text: "Swift", callback_data: "Swift" },
        ],
        [
          { text: "Go", callback_data: "Go" },
          { text: "DevOps", callback_data: "DevOps" },
          { text: ".Net", callback_data: ".Net" },
        ],
      ],
    }),
  };

  // bot.sendMessage(chat_id, "Raqamingizni pastdagi tugma orqali kiriting", {
  //
  // });
  console.log(message);

  state.push(text);
  if (step == 1) {
    return await bot.sendMessage(chat_id, "ismingizni kiriting");
  } else if (step == 2) {
    return await bot.sendMessage(chat_id, "familiyangizni kiriting");
  } else if (step == 3) {
    return await bot.sendMessage(chat_id, "yoshingizni kiriting");
  } else if (step == 4) {
    return await bot.sendMessage(
      chat_id,
      "O'qimoqchi bo'lgan tilingizni kiriting",
      buttonOption
    );
  } else if (step == 7) {
    let option = {
      parse_mode: "Markdown",
      reply_markup: {
        one_time_keyboard: true,
        keyboard: [
          [{ text: "My location", request_location: true }, { text: "Canel" }],
        ],

        resize_keyboard: true,
        remove_keyboard: false,
      },
    };
    return bot.sendMessage(chat_id, "Manzilingizni kiriting", option);
  } else if (step == 8) {
    return bot.sendMessage(chat_id, "E'tiboringiz uchun rahmat");
    return bot.sendMessage(
      chat_id,
      `${(state[0], state[1], state[2], state[3])}`
    );
  }

  console.log(state);
  // console.log(step);
});

bot.on("callback_query", async (msg) => {
  step++;

  // console.log(msg);

  const data = msg.data;
  const chatId = msg.message.chat.id;
  state.push(msg.data);

  return bot.sendMessage(chatId, "nomeringizni kiriting", {
    reply_markup: {
      keyboard: keyboards.setPhoneKeyboard,

      resize_keyboard: true,
      one_time_keyboard: true,
      remove_keyboard: false,
    },
  });
});

bot.on("contact", async (msg) => {
  step++;
  console.log(msg);
  state.push(msg.contact.phone_number);

  let option = {
    parse_mode: "Markdown",
    reply_markup: {
      one_time_keyboard: true,
      keyboard: [
        [{ text: "My location", request_location: true }, { text: "Canel" }],
      ],
    },
  };
  return bot.sendMessage(msg.chat.id, "Manzilingizni kiriting", option);
});
