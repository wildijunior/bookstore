import Router from "express";
import page404Controller from "../controller/page404";

const routes = Router();

routes.use(page404Controller.page404);

export default routes;
