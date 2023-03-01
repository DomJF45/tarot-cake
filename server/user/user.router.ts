import express from 'express';
import { register, login, testGetUserCookie } from '../controllers/userController';

const router = express.Router();

router.post('/', register);
router.post('/login', login);
router.get('/getUser', testGetUserCookie) // remove this after testing

export const userRouter = router;
