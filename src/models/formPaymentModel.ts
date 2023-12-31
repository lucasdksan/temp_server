import { prisma } from '../prisma';
import { form_payment } from './../zod/form_payment';

export default class FormPaymentModel {
    async architect(body: any){
        if (!body) throw Error("Files not exist");
        
        const { type } = form_payment.parse(body);
        const result_create = await prisma.formPayment.create({
            data: {
                type
            }
        });

        if(!result_create) throw Error("Fail Create Type Payment");

        return true;
    }

    async rise() {
        const resultList = await prisma.formPayment.findMany();

        if(!resultList) throw Error("Erro in list form payment!");

        return resultList;
    }
}