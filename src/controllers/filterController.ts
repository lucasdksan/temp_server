import { Request, Response } from "express";
import FilterModel from "../models/filterModel";

export default class FilterController {
    async filter(req: Request, res: Response){
        try {
            const body = req.body;
            const filterModel = new FilterModel();
            const result = await filterModel.filtering(body);

            return res.json(result);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}