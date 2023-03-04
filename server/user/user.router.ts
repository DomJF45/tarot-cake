import express from 'express';
import { register, login, getUserHistory, setUserHistory, getUser } from '../user/user.controller';
import { protect } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/', register);
router.post('/login', login);
router.get('/getUser', getUser); // remove this after testing
router.get('/history', protect, getUserHistory);
router.post('/setHistory', protect, setUserHistory);

export const userRouter = router;
