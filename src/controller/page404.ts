import { Request, Response } from "express";
import path from "path";
import viewsDir from "../util/viewsDir";

export default {
  get404(req: Request, res: Response) {
    res.status(404).render(path.resolve(viewsDir, "page404"));
  },
};
