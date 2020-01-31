import express                from 'express';
import userRouter             from './user.router.js';
import checkUserAuthorization from '../middlewares/authorization/checkUserAuthorization.js';
import taskRouter             from './task.router.js';

const router = express.Router();

router.use( checkUserAuthorization );

router.use( '/user', userRouter );
router.use( '/task', taskRouter );

export default router;