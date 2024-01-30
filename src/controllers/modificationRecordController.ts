import { Request, Response } from "express";
import ModificationRecordModel from "../models/modificationRecordModel";

export default class ModificationRecordController {
    async list(req: Request, res: Response){
        try {
            const modificationRecordModel = new ModificationRecordModel();
            const listModification = await modificationRecordModel.listing();

            return res.json(listModification).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}