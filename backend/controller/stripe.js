const express = require('express')
const router = express.Router()
const Stripe = require('stripe')

require('dotenv').config();
const stripe = Stripe(process.env.STRIPE_KEY)


const payment = async (req, res) => {
    // console.log("data at stripe is", req.body);
    const plan = req.body.plans
    const id = req.body.userId
    const price = req.body.total
    console.log("plans areeee", plan);
    // console.log(" id isss", id);

    const customer = await stripe.customers.create({
        metadata: {
            userId: req.body.userId,
            total: req.body.total,
            plans: req.body.plans
        }
    })
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: plan.name,
                        images: [plan.image],
                        description: plan.description,
                        metadata: {
                            id
                        }
                    },
                    unit_amount: price * 100,
                },
                quantity: 1,
            },
        ],
        customer: customer.id,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL
            }/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.CLIENT_URL}/user-payment`,
    });
    res.send({ url: session.url });
};

//stripe webhook



// This is your Stripe CLI webhook secret for testing your endpoint locally.
// let endpointSecret;

endpointSecret = "whsec_16028dc5fda4b9e6b89903f41dea93b1316e617688f9aea4740b360d62bc1c4e";

// router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
//     const sig = req.headers['stripe-signature'];

//     let data;
//     let eventType;

//     if (endpointSecret) {

//         let event;

//         try {
//             event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//             console.log("webhook verified");
//         } catch (err) {
//             console.log(`Webhook Error: ${err.message}`);
//             res.status(400).send(`Webhook Error: ${err.message}`);
//             return;
//         }

//         data = event.data.object
//         eventType = event.type

//     } else {
//         data = req.body.data.object
//         eventType = req.body.type
//     }

// Handle the event

// if (eventType === "checkout.session.completed") {
//     stripe.customers.retrieve(data.customer).then(
//         (customer) => {
//             console.log(customer)
//             console.log("data", data)
//         }
//     ).catch(err => console.log(err.message))
// }

// Return a 200 response to acknowledge receipt of the event


// res.send().end();
// });



module.exports = payment