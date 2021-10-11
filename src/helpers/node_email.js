const getMessage = ({ name, email, total_amount, confirm_number, city }) => {
  const text = `Hi, ${name}!
  Thank for choosing Bluluxshop
  
  The confirmation number for your purchase of ${total_amount} is ${confirm_number}.
  You're items will be soon shipped to your address in ${city}.
  If there are any question, you can send as an email at bluluxgelsystem@gmail.com
  
  Bluluxshop team.`;

  const body = `Hi, ${name}!<br/>
  Thank for choosing Bluluxshop<br/>
  <br/>
  The confirmation number for your purchase of ${total_amount} is <strong>${confirm_number}</strong>.<br/>
  You're items will be soon shipped to your address in ${city}.<br/>
  <br/>
  If there are any question, you can send us an email at <a href="mailto:bluluxgelsystem@gmail.com">bluluxgelsystem@gmail.com</a><br/>
  Best regards,<br/>
  Bluluxshop team.`;
  
  return {
    to: email,
    from: "bluluxgelsystem@gmail.com",
    subject: "Bluluxshop.com Your confirmation number for your purchase",
    text: text,
    html: body,
  };
};

export const sendEmail = async (
  sendGridMail,
  { name, email, total_amount, confirm_number, city }
) => {
  try {
    console.log("IN SEND EMAIL");
    console.log(name, email);
    await sendGridMail.send(
      getMessage({ name, email, total_amount, confirm_number, city })
    );
  } catch (error) {
    console.error("Error sending email");
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};
