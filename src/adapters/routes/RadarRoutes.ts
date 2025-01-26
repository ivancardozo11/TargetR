import { Router } from 'express';
import container from '../../infrastructure/inversify.config';
import { RadarController } from '../controllers/RadarController';

const router = Router();
const radarController = container.get(RadarController);

router.post('/radar', radarController.handle.bind(radarController));

export default router;
