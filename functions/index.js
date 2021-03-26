const functions = require("firebase-functions");
//node js
const express = require("express");
const cors = require('cors');
const stripe = require('stripe')('sk_test_51IN6V9FAWLMuM7DeDrGduPGjOqxZzeS6VmWfExqUROEg4q5QU6tbA2KMDAGD77dKVIm3OGL1TL0BwM147n72HA6p00bmRifYGw');

//setting up an API


//app config 
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//api rootes
app.get('/',(request,response)=>response.status(200).send('hello world'))
// app.get('/test',(request,response)=>response.status(200).send('this is the test api'))
app.post('/payments/create', async (request,response)=>{
    const total = request.query.total;
    console.log('payment Request Recieved TaDa!! for this amt,',total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// listen commands 
exports.api = functions.https.onRequest(app)

//example endpoint : http://localhost:5001/clone-1c5c4/us-central1/api