import express from  'express';

import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { addPaymentGateway, paytmResponse } from '../controller/payment-controller.js';
import { addItemInCart } from '../controller/cart-controller.js';

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/cart/add', addItemInCart);
router.post('/payment', addPaymentGateway);
router.post('/callback', paytmResponse);


export default router;