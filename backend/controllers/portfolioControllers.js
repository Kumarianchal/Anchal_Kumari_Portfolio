const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  service: 'ElasticEmail',
  host: 'smtp.elasticemail.com',
  port: 2525,
  // secure: true,
  auth: {
    user: process.env.SMPTP_ELASTIC_EMAIL_USER,
    pass: process.env.SMPTP_ELASTIC_EMAIL_PASS
  }
});
const sendEmailController = (req, res) =>{
  try{
            const {name, email, message} = req.body;
    
            const emailObject = {
              from: process.env.SMPTP_ELASTIC_EMAIL_USER,
              to: email,
              subject: "MERN portfolio response",
              html: `<p>Name : ${name}</p>
                        <p>Email : ${email}</p>
                        <p>Message : ${message}</p>`,
            };
            transporter.sendMail(emailObject, (err, info)=>{
              if(err){
                console.log(err)
                return res.status(500).send({
                  success: false,
                  message: 'Send email notification API error!',
                  err
                })
              } else{
                  return res.status(200).send({
                    success: true,
                    message: 'Email notification sent successfully!',
                    info
                })
                
              }
            })
        } catch(error){
            console.log("Found error2" +error)
            return res.status(500).send({
                success: false,
                message: 'Failed to send email notification !',
                error 
            })
        }
}



// let ElasticEmail = require('@elasticemail/elasticemail-client');
 
// let defaultClient = ElasticEmail.ApiClient.instance;
 
// let apikey = defaultClient.authentications['apikey'];
// apikey.apiKey = process.env.API_ELASTIC_EMAIL
 
// let api = new ElasticEmail.EmailsApi()



// const sendEmailController = (req, res) =>{
//     try{
//         const {name, email, message} = req.body;

//         const emailObject = ElasticEmail.EmailMessageData.constructFromObject({
//             Recipients: [
//               new ElasticEmail.EmailRecipient("anchal.kumari.1905@gmail.com")
//             ],
//             Content: {
//               Body: [
//                 ElasticEmail.BodyPart.constructFromObject({
//                   ContentType: "HTML",
//                   Content: `<p>Name : ${name}</p>
//                             <p>Email : ${email}</p>
//                             <p>Message : ${message}</p>`
//                 })
//               ],
//               Subject: "MERN PORTFOLIO : Interested in Anchal's profile",
//               From: email
//             }
//           });

//           const callback = function(error, data, response) {
//             if (error) {
//               console.error("Found error1" + error);
//               throw error;
//             } else {
//               console.log('API called successfully.');
//               console.log("Response")

//             }
//           };

//           api.emailsPost(emailObject, callback);

//         return res.status(200).send({
//             success: true,
//             message: 'Email notification sent successfully!!!'
//         })
//     } catch(error){
//         console.log("Found error2" +error)
//         return res.status(500).send({
//             success: false,
//             message: 'Send email notification API error!',
//             error
//         })
//     }
// };

module.exports = { sendEmailController };