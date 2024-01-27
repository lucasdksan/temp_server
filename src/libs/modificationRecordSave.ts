import { prisma } from "../prisma";

export const modificationRecordSave = async (user_id: string) => {
    const date = new Date();

    const modificationRecordExist = await prisma.modificationRecord.findFirst({
        where: { user_id }
    });

    if(!modificationRecordExist) {
        const modificationRecord = await prisma.modificationRecord.create({
            data: { 
                user_id, 
                last_change: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}` 
            }
        });

        return modificationRecord.id;
    } else {
        return modificationRecordExist.id;
    } 
}