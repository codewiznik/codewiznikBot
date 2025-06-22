const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: false }); // Disable polling

const app = express();
const port = process.env.PORT || 3000;

// Set webhook to the public URL provided by Render
bot.setWebHook(`https://${process.env.RENDER_EXTERNAL_URL}/bot${token}`);

// Listen to incoming updates
app.use(express.json());
app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Example command handler
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! Your bot is now live on Render.');
});

// Keep server alive
app.listen(port, () => {
  console.log(`Bot server running on port ${port}`);
});
