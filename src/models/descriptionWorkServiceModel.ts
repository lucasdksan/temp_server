import { prisma } from "../prisma";
import { description_work_service } from "../zod/description_work_service";

export default class DescriptionWorkServiceModel {
    async creating(body: any){
        if (!body) throw Error("Files not exist");
        
        const { type } = description_work_service.parse(body);
        const result_create = await prisma.descriptionWorkService.create({
            data: {
                type
            }
        });

        if(!result_create) return false;
        else return true;
    }

    async listing(){
        const resultList = await prisma.descriptionWorkService.findMany();

        if(!resultList) throw Error("Erro in list form payment!");

        return resultList;
    }

    async excluding(id: any) {
        if (!id) throw Error("Error in Description Work Service search: Description Work Service does not exist");

        const result = await prisma.descriptionWorkService.delete({
            where: { id }
        });

        if (!result) return false;
        else return true;
    }

    async updating(id: any, body: any)  {
        if (!id) throw Error("Description, work and Service error");
        if (!body) throw Error("Description, work and Service error");

        const { type } = body;

        const descriptionWorkService = await prisma.descriptionWorkService.update({
            where: { id },
            data: { type }
        });

        if(!descriptionWorkService) return false;
        else return true;
    }
}