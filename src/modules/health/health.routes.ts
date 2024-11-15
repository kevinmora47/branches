import {Router} from 'express';
import {HealthController} from './health.controller';

const router = Router();
const healthController = new HealthController();

router.get('/', healthController.checkHealth);

export default router;