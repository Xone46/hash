const Message = require('../models/Message');

const { PASSWORD, EMAIL } = require('../config');
const nodemailer = require("nodemailer");

 // send Observation
 exports.envoyer = async (req, res) => {

    const { nom, prenom, email, telephone, message } = req.body;
  
    await Message({
        nom: nom,
        prenom : prenom,
        email: email,
        telephone: telephone,
        message: message,
    }).save()
        .then(() => {

            var transporter = nodemailer.createTransport({
                service : 'gmail',

                tls: {
                    rejectUnauthorized: false
                },

                auth: {
                    user: EMAIL,
                    pass: PASSWORD,
                }
            });
    
                // send mail with defined transport object
            transporter.sendMail({
                    from: EMAIL, // sender address
                    to: EMAIL, // list of receivers
                    subject: "GTH Consult", // Subject line
                    text: '', // plain text body
                    html: `<b> Message : ${message}</b>
                           <b> Nom : ${nom}</b>
                           <b> Prenom : ${prenom}</b>
                           <b> Telephone : ${telephone}</b>
                           <b> Telephone : ${email}</b>`,
                }, (error, response) => {
                    if(error) {
                        res.json({ msg: error }).status(200);
                    } else {
                        res.json({ msg: "Votre message a été envoyeé avec succès", status: "succes" }).status(200);
                    }

                });
    

            
        })
        .catch((err) => {
            res.json({ msg: err.message, status: "echec" }).status(200);
        });

}