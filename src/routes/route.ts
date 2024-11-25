import { Router } from 'express';
import {getLastDigit, saveData} from '../controllers/controller';

const routes = Router();

routes.post('/save', saveData);
routes.post('/get', getLastDigit);

export { routes };