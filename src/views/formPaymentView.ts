import { formPaymentTypes } from "../types/formPaymentTypes";

export function formPaymentView(data: formPaymentTypes){    
    const { created_at, update_at, id, ...form_payment_view } = data;

    return form_payment_view;
}

export function formPaymentViewMany(data: formPaymentTypes[]){
    return data.map( formPayment => formPaymentView(formPayment) );
}