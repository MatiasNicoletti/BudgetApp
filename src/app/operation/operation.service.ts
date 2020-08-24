import { Injectable } from '@angular/core';
import { Operation } from '../models/Operation';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OperationService {
    private expenses: Operation[] = [];
    private incomes: Operation[] = [];
    private expenseSubject = new Subject<Operation[]>();
    private incomeSubject = new Subject<Operation[]>();

    addOperation(operation:Operation){
        // console.log('here');
        if(operation.type === 'income'){
            this.incomes.push(operation);
            this.incomeSubject.next([...this.incomes]);
        }else{
            this.expenses.push(operation);
            this.expenseSubject.next([...this.expenses]);
        }
        
        
    }

    deleteOperation(operation:Operation){
        if(operation.type === 'income'){
            this.incomes.splice(this.incomes.indexOf(operation), 1);
            this.incomeSubject.next([...this.incomes]);
        }else{
            this.expenses.splice(this.expenses.indexOf(operation), 1);
            this.expenseSubject.next([...this.expenses]);
        }
        
    }

    getExpenseListener(){
        return this.expenseSubject.asObservable();
    }

    getIncomeListener(){
        return this.incomeSubject.asObservable();
    }
}