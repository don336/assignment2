import { Router } from "express";
import myController from "../../../controller/myController";

const route = Router();
route.get("/contacts", myController.getAllContacts);
route.post("/contacts", myController.postContact);
route.get("/contact/:id", myController.getContact);
route.get("/professional", myController.getProfession);
export default route;
