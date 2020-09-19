const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HSQFEEMAc5fqet6KifSBkplOfaQT3gLCgxaWY0gXvmpoIw73drxq0bcaYaEm0yRZ0pxabgXgidHW0yANSOMKQVG009cxhb4wS');

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hi'));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;
	console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: 'eur',
	});
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

exports.api = functions.https.onRequest(app);
