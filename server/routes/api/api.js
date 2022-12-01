import express from 'express';
let router = express.Router();

import productRouter from './controller/products.js';
import userRouter from './controller/users.js'

router.use('/products', productRouter);
router.use("/users", userRouter);


export default router;