import {Router} from 'express';
import {ConnectionController} from './connection.controller';

const router = Router();
const connectionController = new ConnectionController();

router.get('/test', connectionController.testConnection);

export default router;