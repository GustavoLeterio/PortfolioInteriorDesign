const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name} ${body.lastName}\r\n
    Email: ${body.email}\r\n
    Telefone: ${body.phoneNumber}\r\n
    Mensagem: ${body.message}
  `;
  const data = {
    to: 'juliacostadesigndeinteriores@gmail.com',
    from: 'juliacostadesigndeinteriores@gmail.com',
    subject: 'Entraram em contato meu amor! ❤️ ❤️ ❤️',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }
  await mail.send(data).then((response) => { console.log(response); }).catch((error) => { console.log(error); });
}
