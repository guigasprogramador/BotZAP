// importar a biblioteca da Twilio
const twilio = require('twilio');

// credenciais da Twilio
const accountSid = 'sua_account_sid';
const authToken = 'seu_auth_token';

// criar o cliente Twilio
const client = new twilio(accountSid, authToken);

// lista de números para enviar mensagens
const numeros = ['+5511999999999', '+5511888888888', '+5511777777777'];

// mensagem a ser enviada
const mensagem = 'Olá, tudo bem? Estou enviando esta mensagem de teste pelo meu bot do WhatsApp!';

// percorrer a lista de números e enviar a mensagem
numeros.forEach((numero) => {
  client.messages.create({
    body: mensagem,
    from: 'whatsapp:+14155238886', // número da Twilio
    to: `whatsapp:${numero}`
  })
  .then((message) => console.log(`Mensagem enviada para ${numero} com SID ${message.sid}`))
  .catch((err) => console.error(`Erro ao enviar mensagem para ${numero}: ${err}`));
});
