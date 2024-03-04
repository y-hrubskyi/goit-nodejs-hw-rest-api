const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL } = require("../config/env");

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: SENDGRID_SENDER_EMAIL,
  };

  await sgMail.send(email);
};

module.exports = sendEmail;
