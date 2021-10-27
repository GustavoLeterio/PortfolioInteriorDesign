const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name} ${body.lastName}\r\n
    Email: ${body.email}\r\n
    Email: ${body.phoneNumber}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    to: 'juliacostadesigndeinteriores@gmail.com',
    from: 'juliacostadesigndeinteriores@gmail.com',
    subject: 'Entraram em contato meu amor! ❤️ ❤️ ❤️',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'ok' });
}