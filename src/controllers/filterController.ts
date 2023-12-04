import { Request, Response } from "express";
import FilterModel from "../models/filterModel";

export default class FilterController {
    async filter(req: Request, res: Response){
        try {
            const body = req.body;
            const filterModel = new FilterModel();

            const result = await filterModel.process(body);

            return res.json(result);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}