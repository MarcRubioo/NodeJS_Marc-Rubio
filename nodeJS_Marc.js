// Fet per parc Rubio

const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

port = 3020;

app.listen(port,()=>{
    console.log('Server listening on the port: '+port)
});



var admin = require("firebase-admin");

var serviceAccount = require("./marc-rubio-romero-firebase-adminsdk-62dts-0e025fa716.json");
const {getFirestore} = require("firebase-admin/firestore");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

app.put('/marcRubio/guanyador', (req, res) =>{
    var data_nova = req.body
    const definitiu= db.collection('mundial22Rubio').doc('final22Rubio').set({data: data_nova}, {merge:true})
    res.json(definitiu)
});
