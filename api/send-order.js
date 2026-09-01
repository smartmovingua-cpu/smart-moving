export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, category, service, car, transport, address, street, phone, date, comments, description } = req.body || {};

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({ error: 'Server missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variables' });
  }

  const selectedCategory = category || service || 'Не вказано';
  const selectedCar = car || transport || 'Не вказано';
  const userName = name || 'Клієнт';
  const userPhone = phone || 'Не вказано';
  const userAddress = address || street || 'Не вказано (Львів)';
  const userDate = date || 'Сьогодні / Терміново';
  const userComments = comments || description || 'Без додаткових приміток';

  const text = `🚨 **НОВЕ ЗАМОВЛЕННЯ — SMART MOVING ЛЬВІВ** 🚨
──────────────────────────────
👤 **Клієнт:** ${userName}
📞 **Телефон:** ${userPhone}
📍 **Вулиця / Адреса:** ${userAddress}

🛠 **Послуга / Вид робіт:** ${selectedCategory}
🚚 **Вантажне авто:** ${selectedCar}

📅 **Дата виконання:** ${userDate}
──────────────────────────────
📝 **КОМЕНТАР ТА РОЗРАХУНОК:**
${userComments}
──────────────────────────────
⚡ *Служба вантажних перевезень Smart Moving*`.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown'
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Order sent successfully' });
    } else {
      const errDetails = await response.json().catch(() => ({}));
      return res.status(500).json({ error: 'Failed to send message to Telegram', details: errDetails });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}