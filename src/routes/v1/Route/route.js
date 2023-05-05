import { Router } from 'express';
import myController from '../../../controller/myController';

const route = Router();
route.get('/contacts', myController.getAllContacts);
route.get('/contact/:id', myController.getContact);
route.post('/contacts', myController.postContact);
route.put('/contact/:id', myController.updateContact);
route.delete('/contact/:id', myController.deleteContact);
route.get('/professional', myController.getProfession);
export default route;
