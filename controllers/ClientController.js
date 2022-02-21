const Client = require('../models/Client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');


// login client
exports.login = async (req, res, next) => {

    const { email, password } = req.body;

    if (!(email && password)) {
        res.status(200).send({ msg: "Toutes les formule sont requises" });
    }

    const client = await Client.findOne({ email });

    if (client) {

        if (client.cas === "desactive") {
            res.status(200).send({ msg: "Votre compte est suspendu, veuillez contacter l'administration" });
        } else {

            let decryptedPassword = await bcrypt.compare(password, client.password);

            if (decryptedPassword) {
                //Create token
                const token = jwt.sign(
                    { email: email },
                    JWT_SECRET,
                    {
                        expiresIn: "2h",
                    }
                );
                res.status(200).json({ msg: "Vous avez été connecté avec succès", token: token });
            } else {
                res.status(200).send({ msg: "Désolé mais le mot de passe n'est pas correct" });
            }

        }
    } else {
        res.status(200).json({ msg: "Désolé mais ce compte n'existe pas" });
    }




}
// register client
exports.register = async (req, res, next) => {

    const { nom, prenom, email, password, adresse, ville, pays, telephone, refClient, nomSociete } = req.body;
    const pass = password
    const isMatch = await Client.findOne({ email });

    if (!isMatch) {

        let encryptedPassword = await bcrypt.hash(password, 10);

        await Client({
            nom: nom,
            prenom: prenom,
            email: email,
            password: encryptedPassword,
            adresse: adresse,
            ville: ville,
            pays: pays,
            telephone: telephone,
            refClient: refClient,
            cas: 'active',
            nomSociete: nomSociete,
        }).save()
            .then(() => {
                var transporter = nodemailer.createTransport(smtpTransport({
                    host: "smtp-mail.outlook.com", // hostname
                    secureConnection: false, // TLS requires secureConnection to be false
                    port: 587, // port for secure SMTP
                    auth: {
                        user: '',
                        pass: '',
                    },
                    tls: {
                        ciphers:'SSLv3'
                    }
                }));
        
                    // send mail with defined transport object
                    let info = transporter.sendMail({
                        from: 'achraflahcen46@hotmail.com', // sender address
                        to: email, // list of receivers
                        subject: "GTH Consult", // Subject line
                        text: '', // plain text body
                        html: `<b> Création de vos identifiants Client à GTH Consult et Mot de Passe : ${pass}</b>`,
                    });
        
                    transporter.sendMail(info, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
                        }
                      });

                res.json({ msg: "Votre compte a été enregistré avec succès", status: "succes" }).status(200);
            })
            .catch((err) => {
                res.json({ msg: err.message, status: "echec" }).status(400);
            });

    } else {
        res.json({ msg: "Le compte existe déjà", status: "echec" }).status(400);
    }

}
// Select Client Specfique client specfique
exports.profile = async (req, res, next) => {

    let cid = req.params.cid
    const client = await Client.findById(cid);
    await res.status(200).json({ client });

}

//Show all clients
exports.show = async (req, res, next) => {
    const client = await Client.find();
    await res.status(200).json({ client });

}

exports.delete = async (req, res, next) => {

    let cid = req.params.cid
    Client.findByIdAndRemove(cid)
    .then(() => {
        res.status(200).json({ msg: "Le compte a été supprimé avec succès" });
    })
    .catch((err) => {
        res.status(400).json({ msg: err.message });
    });
    

}

// update Information Client
exports.update = async (req, res, next) => {
    // get id
    let cid = req.params.cid
    // info update
    const { nom, prenom, email, password, adresse, ville, pays, telephone, refClient, nomSociete } = req.body;
    
    let clientInfo = {
        nom,
        prenom,
        email,
        password,
        adresse,
        ville,
        pays,
        telephone,
        refClient,
        nomSociete,
    }

    await Client.findByIdAndUpdate(cid, { $set: clientInfo })
    .then(() => {
        res.status(200).json({ msg: "Les informations du compte ont été modifiées avec succès" });
    })
    .catch((err) => {
        res.status(400).json({ msg: err.message });
    });

}

// Active Status Client

exports.active = async (req, res, next) => {
    // get id
    let cid = req.params.cid
    // info update
    await Client.findByIdAndUpdate(cid, { $set: { cas: "active" } })
    .then(() => {
        res.status(200).json({ msg: "Le compte a été activé" });
    })
    .catch((err) => {
        res.status(400).json({ msg: err.message });
    });
}


// Desactive Status Client

exports.desactive = async (req, res, next) => {
    // get id
    let cid = req.params.cid
    // info update
    await Client.findByIdAndUpdate(cid, { $set: { cas: "desactive" } })
    .then(() => {
        res.status(200).json({ msg: "Le compte a été desactivé" });
    })
    .catch((err) => {
        res.status(400).json({ msg: err.message });
    });

}



