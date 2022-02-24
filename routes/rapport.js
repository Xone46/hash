const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Rapport = require('../models/Rapport');
const Admin = require('../models/Admin');
const Client = require('../models/Client');
const multer = require('multer');
const fs = require('fs');
const nodemailer = require("nodemailer");
var moment = require('moment');




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}`);
  }
})

const upload = multer({ storage: storage })


// uploade Rapport with info client
router.post('/upload', upload.single('file'), async (req, res) => {

  const { adminId, clientId, referenceRapport, designation, dateIntervention, responsableClient, dateProductionControle, category} = req.body
  // Get Status  Admin
   const admin = await Admin.findById(adminId);
   // Get email Client for send message
   const client = await Client.findById(clientId);

  if (req.file === undefined) {

    return res.json({ msg: err.message }).status(200);

  } else {

    if(admin.status == "0")
    {
      Rapport({
        referenceRapport: referenceRapport,
        designation: designation,
        clientId: clientId,
        dateIntervention : moment(new Date(dateIntervention)).format('YYYY-MM-DD'),
        responsableClient : responsableClient,
        dateProductionControle : moment(new Date(dateProductionControle)).format('YYYY-MM-DD'),
        category : category,
        pdfPath: req.file.path,
        size: req.file.size,
        date: req.file.uploadDate,
        filename: req.file.filename,
        originalname: req.file.originalname
      }).save()
        .then(() => {
          res.status(200).json({ msg: "Téléchargé avec succès mais vous devez attendre la confirmation a Super Admin" });
        })
        .catch((err) => {
           res.status(200).json({ msg: err.message });
        });
    }

    if(admin.status == "1")
    {
      Rapport({
        referenceRapport: referenceRapport,
        designation: designation,
        clientId: clientId,
        dateIntervention : moment(new Date(dateIntervention)).format('YYYY-MM-DD'),
        responsableClient : responsableClient,
        dateProductionControle : moment(new Date(dateProductionControle)).format('YYYY-MM-DD'),
        category : category,
        pdfPath: req.file.path,
        size: req.file.size,
        date: req.file.uploadDate,
        filename: req.file.filename,
        originalname: req.file.originalname
      }).save()
        .then(() => {
  
          var transporter = nodemailer.createTransport({
            service: 'gmail',
  
            tls: {
              rejectUnauthorized: false
            },
  
            auth: {
              user: 'achraflahcen96@gmail.com',
              pass: 'BAZ-BOZ2017',
            }
          });
  
          // send mail with defined transport object
          transporter.sendMail({
            from: 'achraflahcen96@gmail.com', // sender address
            to: client.email, // list of receivers
            subject: "GTH Consult", // Subject line
            text: '', // plain text body
            html: `<b> GTH Consult ajoute un fichie Pdf pour vous</b>`,
          }, (error, response) => {
            if (error) {
              res.json({ msg: error }).status(200);
            } else {
              res.status(200).json({ msg: "Téléchargé avec succès" });
            }
  
          });
              res.status(200).json({ msg: "Téléchargé avec succès" });
  
        })
        .catch((err) => {
           res.status(200).json({ msg: err.message });
        });

    }


  }

})

// Delete Rapport
router.delete('/pdf/:filename', async (req, res) => {

  let filename = req.params.filename
  const path = `./uploads/${filename}`;
  try {
    fs.unlinkSync(path)
    await Rapport.remove({ filename: filename })
    await res.status(200).json({ msg: "Le fichier Pdf a été supprimé avec succès" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }

});



// Show rapport (pdf)
router.get('/pdf/:filename', async (req, res) => {
  const filename = req.params.filename;
  const pdf = await Rapport({ filename: filename });
  const path = `./uploads/${pdf.filename}`;
  fs.readFile(path, function (err, file) {
    res.writeHead(200, { "Content-Type": "application/pdf" });
    res.write(file, "binary");
    res.send()
  });
})

// get All rapport
router.get('/pdf', async (req, res) => {
  Rapport.aggregate([

    {
      $lookup:
      {
        from : 'clients',
        localField: 'clientId',
        foreignField: '_id',
        as: 'client',
      },
      

    }

  ]).exec((err, rapports) => {
    if (err) {
      res.status(400).json({ msg: err.message });
    } else {
      res.status(200).json({ rapports });
    }
  });
});

// get All rapport with year
router.get('/pdf/year/:year', async (req, res) => {

  const year = req.params.year
  const rapport = await Rapport.find(
    {
      dateIntervention: {
          $gte: `${year}-01-01`,
          $lt: `${year}-12-31`
      }
  });
  await res.status(200).json({ rapport });

});

// Get all Rapport With client Info
router.get('/clients/:clientId', async (req, res) => {
  const clientId = req.params.clientId;
  Rapport.aggregate([
    {
      $lookup:
      {
        from: 'clients',
        localField: 'clientId',
        foreignField: '_id',
        as: 'client'
      }
    }
  ]).exec((err, rapports) => {
    if (err) {
      res.status(400).json({ msg: err.message });
    } else {
      res.status(200).json({ rapports });
    }
  });

});




module.exports = router;