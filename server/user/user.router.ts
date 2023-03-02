import express from 'express';
import { register, login, testGetUserCookie, getUserHistory, setUserHistory } from '../controllers/userController';
import { protect } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/', register);
router.post('/login', login);
router.get('/getUser', testGetUserCookie); // remove this after testing
router.get('/history', protect, getUserHistory);
router.post('/setHistory', protect, setUserHistory);

export const userRouter = router;
