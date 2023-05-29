const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers');

router.get('/', (req, res) => {
    res.send('Welcome to my API!');
});


router.get('/products', ctrl.getAllProducts);

router.get("/orders", ctrl.getAllOrders);

router.post("/accept-order", ctrl.acceptOrder);

module.exports = router;

