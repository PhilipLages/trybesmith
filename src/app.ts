import express from 'express';
import orderRouter from './routers/orderRouter';
import productsRouter from './routers/productRouter';
import userRouter from './routers/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
