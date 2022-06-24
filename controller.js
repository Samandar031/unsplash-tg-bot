const keyboards = require("./keyboard.js");
let step = 0;
let state = [];

module.exports = class Controllers {
  static async MessageController(message, bot) {
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
            { text: "salom", callback_data: "1" },
            { text: "salom", callback_data: "2" },
          ],
          [
            { text: "salom", callback_data: "3" },
            { text: "salom", callback_data: "4" },
            { text: "salom", callback_data: "5" },
          ],
          [{ text: "salom", callback_data: "6" }],
          [{ text: "salom", callback_data: "7" }],
          [{ text: "salom", callback_data: "8" }],
          [{ text: "salom", callback_data: "9" }],
        ],
      }),
    };

    state.push(text);
    if (step == 1) {
      return await bot.sendMessage(
        chat_id,
        "ismingizni kiriting",
        buttonOption
      );
    } else if (step == 2) {
      return await bot.sendMessage(chat_id, "familiyangizni kiriting");
    } else if (step == 3) {
      return await bot.sendMessage(chat_id, "yoshingizni kiriting");
    } else if (step == 4) {
      return await bot.sendMessage(chat_id, "universitetingizni kiriting");
    } else if (step == 5) {
      return await bot.sendMessage(chat_id, "nomeringizni kiriting");
    }

    console.log(state);
    console.log(message);

    // bot.sendMessage(chat_id, "Raqamingizni pastdagi tugma orqali kiriting", {
    //   reply_markup: {
    //     keyboard: keyboards.setPhoneKeyboard,
    //     resize_keyboard: true,
    //     one_time_keyboard: true,
    //     remove_keyboard: false,
    //   },
    // });
    bot.on("callback_query", (msg) => {
      console.log(msg);
    });
  }
};
