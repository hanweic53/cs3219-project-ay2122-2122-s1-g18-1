const nodemailer = require('nodemailer')

const sendEmail = (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USERNAME,
        pass: process.env.PASS
      }
    })
    transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text
    }).then(() => {
      console.info('Success: Verification Email Sent')
    }
    ).catch(() => {
      console.error('Failure: Verification Email Failed To Send')
    })
  } catch (err) {
    console.error('Failure: Verification Email Failed To Send')
    console.error(err)
  }
}

module.exports = sendEmail
