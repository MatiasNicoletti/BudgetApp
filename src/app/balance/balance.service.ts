import { Injectable, OnInit } from '@angular/core';
import { Balance } from '../models/Balance';
import { Subject } from 'rxjs';
import { Operation } from '../models/Operation';

@Injectable({
    providedIn: 'root'
  })
export class BalanceService{
    
    private balance: Balance = new Balance();
    private balanceSubject= new Subject<Balance>();


    getBalanceListener(){
      return this.balanceSubject.asObservable();
    }

    getBalance(){
      this.balance.amount = 0;
      return this.balance;
    }

    addItem(operation: Operation){
      operation.type === 'income' ? this.balance.amount += +operation.amount : this.balance.amount -= +operation.amount;
    }

    removeItem(operation: Operation){
      operation.type === 'income' ? this.balance.amount -= +operation.amount : this.balance.amount += +operation.amount;
    }

    editItem(operation: Operation, updatedOperation: Operation){
 
      this.removeItem(operation);
      this.addItem(updatedOperation);
    }
}