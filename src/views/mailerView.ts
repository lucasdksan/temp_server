import { mailerListType } from "../types/mailerListType";

export function mailerView(data: mailerListType){    
    const { update_at, modification_record_id, ...mailer_view } = data;

    return mailer_view;
}

export function mailerViewMany(data: mailerListType[]){
    return data.map( mailer => mailerView(mailer) );
}