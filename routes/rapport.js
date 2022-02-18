const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Rapport = require('../models/Rapport');
const Client = require('../models/Client');
const multer = require('multer');
const fs = require('fs');



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `file-${Date.now()}-${file.originalname}`);
  }
})

const upload = multer({ storage: storage })


// uploade Rapport with info client
router.post('/upload', upload.single('file'), async (req, res) => {
  const { titre, description, clientId } = req.body

  if (req.file === undefined) {

    return res.json({ msg: err.message });

  } else {

    Rapport({
      titre : titre,
      description : description,
      clientId : clientId,
      pdfPath : req.file.path,
      size : req.file.size,
      date : req.file.uploadDate,
      filename : req.file.filename,
      originalname : req.file.originalname
    }).save()
    .then(() => {
      res.status(200).json({msg : "Téléchargé avec succès"});
    })
    .catch((err) => {
        res.status(400).json({msg : err.message});
    });
  }

})

// Delete Rapport
router.delete('/pdf/:filename', async (req, res) => {

  let filename = req.params.filename 
  const path = `./uploads/${filename}`;
  try {
    fs.unlinkSync(path)
    await Rapport.remove({filename : filename})
    await  res.status(200).json({msg : "Le fichier Pdf a été supprimé avec succès"});
  } catch(err) {
    res.status(400).json({msg : err.message});
  }

});



// Show rapport (pdf)
router.get('/pdf/:filename',async (req, res)  => {
const filename = req.params.filename;
const pdf = await Rapport({filename : filename});
const path = `./uploads/${pdf.filename}`;
  fs.readFile(path, function(err, file) {
        res.writeHead(200, {"Content-Type" : "application/pdf" });
        res.write(file, "binary");
        res.send()
    });
})

// get All rapport
router.get('/pdf', async (req, res)  => {
  Client.aggregate([
    { $lookup:
       {
         from: 'rapports',
         localField: '_id',
         foreignField: 'clientId',
         as: 'rapports'
       }
     }
    ]).exec((err, rapports) => {
      if(err) {
        res.status(400).json({msg: err.message});
      } else {
        res.status(200).json({rapports});
      }
    });
});

// Get all Rapport With client Info
router.get('/clients/:clientId', async (req, res)  => {
  const clientId = req.params.clientId;
  Rapport.aggregate([
      { $lookup:
         {
           from: 'clients',
           localField: 'clientId',
           foreignField: '_id',
           as: 'client'
         }
       }
      ]).exec((err, rapports) => {
        if(err) {
          res.status(400).json({msg: err.message});
        } else {
          res.status(200).json({rapports});
        }
      });

});




module.exports = router;