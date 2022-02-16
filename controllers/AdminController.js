const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

exports.login = async (req, res, next) => {

    const { email, password } = req.body;

    if (!(email && password)) {
        res.status(200).send({ msg: "Toutes les formule sont requises" });
    }

    const admin = await Admin.findOne({ email });

    if (admin) {
        let decryptedPassword = await bcrypt.compare(password, admin.password);

        if (decryptedPassword) {
            //Create token
            const token = jwt.sign(
                { email: email },
                JWT_SECRET,
                {
                    expiresIn: "2h",
                }
            );
            res.status(200).json({ msg: "Vous avez été connecté avec succès", token: token, status : admin.status });
        } else {
            res.status(200).send({ msg: "Désolé mais le mot de passe n'est pas correct" });
        }


    } else {
        res.status(200).json({ msg: "Désolé mais ce compte Admin n'existe pas" });
    }




}

exports.register = async (req, res, next) => {

    const { nom, prenom, email, password, refEmp, status, code } = req.body;

    if (code == "gthconsult") {

        const isMatch = await Admin.findOne({ email });

        if (!isMatch) {

            let encryptedPassword = await bcrypt.hash(password, 10);

            await Admin({
                nom: nom,
                prenom: prenom,
                email: email,
                password: encryptedPassword,
                refEmp: refEmp,
                status: status,
                code: code,
            }).save()
                .then(() => {
                    res.status(200).json({ msg: "Votre compte Admin a été enregistré avec succès" });
                }).catch((err) => {
                    res.status(400).json({ msg: err.message });
                });

        } else {
            await res.status(400).json({ msg: "Le compte Admin existe déjà" });
        }

    } else {
        await res.status(400).json({ msg: "vous ne possède le droit pour créer un compte Admin" });
    }


}

exports.profile = async (req, res, next) => {

    let aid = req.params.aid
    const admin = await Admin.findById(aid);
    await res.status(200).json({ admin });

}

exports.show = async (req, res, next) => {

    const admin = await Admin.find();
    await res.status(200).json({ admin });

}

exports.delete = async (req, res, next) => {

    let aid = req.params.aid

    const { code } = req.body

    if (code == "gthconsult") {

        await Admin.findByIdAndRemove(aid)
        .then(() => {
            res.status(200).json({ msg: "Le compte Admin a été supprimé avec succès" });
        })
        .catch((err) => {
            res.status(400).json({ msg: err.message });
        });


    } else {
        res.status(400).json({ msg: "Le code PIN est incorrect" });
    }


}

exports.update = async (req, res, next) => {
    // get id
    let aid = req.params.aid
    // info update
    const { nom, prenom, email, password, refEmp, code } = req.body;

    if (code == "gthconsult") {

        let adminInfo = {
            nom,
            prenom,
            email,
            password: await bcrypt.hash(password, 10),
            refEmp,
            code,
        }

        await Admin.findByIdAndUpdate(aid, { $set: adminInfo })
        .then(() => {
            res.status(200).json({ msg: "Les informations du compte ont été modifiées avec succès" });
        })
        .catch((err) => {
            res.status(400).json({ msg: err.message });
        });
 

    } else {
        res.status(400).json({ msg: "Le code PIN est incorrect" });
    }

}

// Active Status Admin

exports.active = async (req, res, next) => {
    // get id
    let aid = req.params.aid
    // info update
    await Admin.findByIdAndUpdate(aid, { $set: { status: "1" } })
    .then(() => {
        res.status(200).json({ msg: "Le compte a été Super Admin" });
    })
    .catch((err) => {
        res.status(400).json({ msg: err.message });
    });
}


// Desactive Status Admin

exports.desactive = async (req, res, next) => {
    // get id
    let aid = req.params.aid
    // info update
    await Admin.findByIdAndUpdate(aid, { $set: { status: "0" } })
    .then(() => {
        res.status(200).json({ msg: "Le compte Admin a été Sub Admin" });
    })
    .catch((err) => {
        res.status(400).json({ msg: err.message });
    });

}




