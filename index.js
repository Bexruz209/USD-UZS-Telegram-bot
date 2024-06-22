const TelegramBot = require('node-telegram-bot-api');

const token = '7047971425:AAGujLR66bx6DosGSWyxTyNiOFQAtJR0dm0';

const bot = new TelegramBot(token, { polling: true });

const bot_fun = () => {
    bot.setMyCommands([
        {
            command: "/start", description: "Botni ishga tushirish"
        },
        {
            command: "/kurs", description: "Kurslar"
        }
    ])
}

// Dollar = 12 612,70`, `Rubli = 143,08`, `Yevro = 13 486,13`, `Somon = 1 189,17`, `Rial = 0,30
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const first_name = msg.chat.first_name;
    const text = msg.text;

    // console.log(msg);
    if (text === "/start") {
        bot.sendMessage(chatId, `Assalomu alaykum ${first_name}, bizni botimisga hush kelipsiz `);
        bot.sendMessage(chatId, `${first_name}, Sizga kurslar kerak bosa /kurs, dep yuzing`);
    } else if (text === "/kurs") {
        bot.sendMessage(chatId, `Dollar = 12 612,70
` + `Rubli = 143,08
` + `Eur = 13 486,13
` + `Somon = 1 189,17
` + `Rial = 0,30`)
    }
});
console.log("Bot ish jarayonida...");
bot_fun();