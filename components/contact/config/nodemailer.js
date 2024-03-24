import nodemailer from "nodemailer";

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS
const emailTo = process.env.EMAIL_TO

export const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true,
    auth: {
        user: email,
        pass: pass
    }
});

export const mailOptions = {
    from: email,
    to: emailTo,
}