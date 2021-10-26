const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);
export default (req, res) => {
    const body = JSON.parse(req.body);
    const message = "Nome: " + body.name + " " + body.lastName + "\r\nEmail: " + body.email + "\r\nTelefone: " + body.phoneNumber + "\r\nMensagem: " + body.message;
    const data = {
        to: 'juliacostadesigndeinteriores@gmail.com',
        from: 'juliacostadesigndeinteriores@gmail.com',
        subject: 'Entraram em contato meu amor! ❤️ ❤️ ❤️',
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    }
    mail.send(data);

    res.status(200).json({
        status: 'ok'
    });
}