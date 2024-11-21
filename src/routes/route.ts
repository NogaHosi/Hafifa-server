import { Router } from 'express';
import {getLastDigit, saveData} from '../controllers/controller';

const router = Router();

router.post('/save', saveData);
router.post('/get', getLastDigit);

export { router as routes };