
import express     from 'express';
import { getTask } from '../controllers/task.controller.js';

const taskRouter = express.Router();

taskRouter.post( '', );

taskRouter.get( '/:taskId', getTask );

taskRouter.patch( '/:taskId', );

taskRouter.delete( '/:taskId', );

export default taskRouter;

