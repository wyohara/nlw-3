import {Router} from 'express';
import multer from 'multer';


import Orphanages_controller from './controller/Orphanages_controller';


import uploadConfig from './config/upload';

const routes = Router();
const upload =multer(uploadConfig)

routes.post('/orphanages', upload.array('images'), Orphanages_controller.create)
routes.get('/orphanages/:id', Orphanages_controller.show)
routes.get('/orphanages', Orphanages_controller.list)
  
export default routes;