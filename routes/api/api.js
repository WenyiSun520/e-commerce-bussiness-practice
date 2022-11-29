import express from 'express';
let router = express.Router();

import productRouter from './controller/products.js';

router.use('/products', productRouter);


export default router;