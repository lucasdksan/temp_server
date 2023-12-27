import { classificationExpensesTypes } from "../types/classificationExpensesTypes";

export function classificationExpensesView(data: classificationExpensesTypes){    
    const { created_at, update_at, ...classificationExpenses_view } = data;

    return classificationExpenses_view;
}

export function classificationExpensesViewMany(data: classificationExpensesTypes[]){
    return data.map( classificationExpenses => classificationExpensesView(classificationExpenses) );
}