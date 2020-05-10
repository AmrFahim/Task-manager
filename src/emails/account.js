const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {

    sgMail.send({
        to: email,
        from: 'amrmf2020@gmail.com',
        subject: 'Thanks for joining us ',
        text: `Welcome to the app ${name}. Let us know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {

    sgMail.send({
        to: email,
        from: 'amrmf2020@gmail.com',
        subject: 'Good bye ',
        text: ` ${name}. Let us know if you remove your account accidentally.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}