const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());

const TOKEN = '6992598038:AAEQnowJ16fzp_ATs4kbI6fiKcIg0Oi_Vx4';
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;

app.post('/webhook', async (req, res) => {
  const message = req.body.message;
  const chatId = message?.chat?.id;

  if (chatId) {
    await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: "أهلاً من بوت Render! 🤖"
      })
    });
  }

  res.send('ok');
});

app.get('/', (req, res) => {
  res.send('البوت يعمل 🔥');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Bot is running on port', PORT);
});
