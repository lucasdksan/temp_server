export const nodemailerConfig = {
    host: "smtp.titan.email",
    port: 587,
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS
    }
}