import { Request, Response } from "express";
import path from "path";


export default {
  page404(req: Request, res: Response) {
    res.render(path.resolve("src/views/page404"));
  },
};
