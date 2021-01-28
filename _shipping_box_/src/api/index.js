const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
const hexRgb = require('hex-rgb');
const cors = require('cors');

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://shipping_user:zIr29S63d4ToL7EI@cluster0.ps0y3.mongodb.net/shipping_box?retryWrites=true&w=majority';

//create a MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let collection = null;

//Eastablish connection to MongoDB
client.connect(err => {
    if (err) {
        console.log("Error while connecting to Mongo");
    }
    console.log("Connected to Mongo");
    collection = client.db("shipping_box").collection("order");
});

// perform actions on the collection object
app.post('/create-order', async (req, res) => {

    const data = {
        name: req.body.name,
        weight: req.body.weight,
        color: hexRgb(req.body.color, { format: 'css' }),
        country: req.body.country,
        cost: req.body.cost
    };

    try {
        await collection.insertOne(data)
        console.log("Inserted 1 document");
        res.send("OK").status(200);
    } catch (err) {
        console.log(err);
        res.send(err).status(500)
    }
})

app.get("/get-order", async (req, res) => {
    try {
        const data = [];
        const cursor = await collection.find()

        await cursor.forEach(doc => {
            console.log(doc);
            data.push(doc)
        })
        res.send(data).status(200)
    } catch (err) {
        console.log(err);
        res.send(err).status(500)
    }
})

//close mongo connection
client.close();

//Listem to port 3000
app.listen(5000, () => {
    console.log("Server is running on PORT:5000");
})
    

// const app = require('express')()
// const cors = require("cors");
// app.use(cors());

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json());

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://shipping_user:zIr29S63d4ToL7EI@cluster0.ps0y3.mongodb.net/shipping_box?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// let collection = null;

// //Eastablish connection to MongoDB
// client.connect(err => {
//     if (err) {
//         console.log("Error while connecting to Mongo");
//     }
//     console.log("Connected to Mongo");
//     collection = client.db("shipping_box").collection("order");
// });



// app.post('/create', async (req,res) => {
//     const data = req.body;
//     try{
//         await collection.insertOne(data)
//         res.status(200).send("OK")
//     }catch(err){
//         res.status(200).send("OK")
//     }
// })

// client.close();

// app.listen(5000, () => {
//     console.log("Server is running on PORT:5000");
// })





// // app.get('/', (req,res) => {
// //     res.send("Hey, I'm on root")
// // })

// // app.get('/login', (req,res) => {
// //     res.send("Hey, I'm on login")
// // })