import express from 'express';
import userRouter from './user';
import musicRouter from './music';

const router = express.Router();

router.use('/user', userRouter);
router.use('/music', musicRouter);

export default router;