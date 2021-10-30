const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  if (process.env.SENDGRID_API_KEY) {
    console.log('api key seems there')
  }
  try {

    const body = JSON.parse(req.body);

    const message = `
    Nome: ${body.name} ${body.lastName}\r\n
    Email: ${body.email}\r\n
    Telefone: ${body.phoneNumber}\r\n
    Mensagem: ${body.message}
  `;

    mail.send({
      to: 'juliacostadesigndeinteriores@gmail.com',
      from: 'juliacostadesigndeinteriores@gmail.com',
      subject: 'Entraram em contato meu amor! ❤️ ❤️ ❤️',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    }).then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
    })
  }
  catch (e) {
    console.error(error)
  }
  res.status(200).json({ status: 'ok' });
}
