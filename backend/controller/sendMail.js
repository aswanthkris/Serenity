const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'

const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
} = process.env

const oauth2client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    // SENDER_EMAIL_ADDRESS,
    OAUTH_PLAYGROUND


)

//send mail

const sendEmail = async (to, url) => {
    oauth2client.setCredentials({
        refresh_token: MAILING_SERVICE_REFRESH_TOKEN
    })

    const accessToken = await oauth2client.getAccessToken()
    // console.log("access token", accessToken.token);
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: SENDER_EMAIL_ADDRESS,
            // pass: "phvdzlseopsarmwe",
            clientId: MAILING_SERVICE_CLIENT_ID,
            clinetSecret: MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            accessToken
        }

    })

    const mailOptions = {
        from: SENDER_EMAIL_ADDRESS,
        to: to,
        subject: "Serenity",
        html:
            `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                < h2 style="text-align: center; text-transform: uppercase;color: teal;" > Welcome to the Serenity.</>
                <p>Congratulations! You're almost set to start using DEVAT✮SHOP.
                    Just click the button below to validate your email address.
                </p>

                <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">this is mail text</a>

                <p>If the button doesn't work for any reason, you can also click on the link below:</p>

                <div>${url}</div>
            </div >`
    }
    smtpTransport.sendMail(mailOptions, (err, infor) => {
        if (err) return err
        return infor

    })
}

module.exports = sendEmail