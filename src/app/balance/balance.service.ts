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
      this.balance.amount = 80;
      // console.log(this.balance);
      return this.balance;
    }

    addItem(operation: Operation){
      operation.type === 'income' ? this.balance.amount += +operation.amount : this.balance.amount -= +operation.amount;
    
    }
}