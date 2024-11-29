import { Router } from 'express';
import { tasksrouter } from './tasks'

const router = Router();

router.use(tasksrouter);

export default router;