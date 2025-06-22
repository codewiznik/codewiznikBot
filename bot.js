const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true }); // ✅ Enable polling

// Example command handler
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! Your bot is now live and working via polling.');
});

// Optional: simple log
console.log('Bot is running with polling...');
