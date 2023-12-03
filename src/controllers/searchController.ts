import { Request, Response } from "express";
import SearchModel from "../models/searchModel";

export default class SearchController {
    async search(req: Request, res: Response){
        try {
            const body = req.body;
            const searchModel = new SearchModel();

            const result = await searchModel.process(body);

            return res.json(result).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}