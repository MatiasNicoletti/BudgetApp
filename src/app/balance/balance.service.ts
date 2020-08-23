import { Injectable, OnInit } from '@angular/core';
import { Balance } from '../models/Balance';
import { Subject } from 'rxjs';

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

    addItem
}