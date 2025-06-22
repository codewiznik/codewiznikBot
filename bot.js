const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

console.log("Bot is running with polling...");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '✅ Hello! Your bot is live and working!');
});
