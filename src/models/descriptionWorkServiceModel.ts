import { prisma } from "../prisma";
import { description_work_service } from "../zod/description_work_service";

export default class DescriptionWorkServiceModel {
    async architect(body: any){
        if (!body) throw Error("Files not exist");
        
        const { type } = description_work_service.parse(body);
        const result_create = await prisma.descriptionWorkService.create({
            data: {
                type
            }
        });

        if(!result_create) throw Error("Fail Create Type Description Work Service");

        return true;
    }

    async rise(){
        const resultList = await prisma.descriptionWorkService.findMany();

        if(!resultList) throw Error("Erro in list form payment!");

        return resultList;
    }
}