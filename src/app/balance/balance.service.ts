import { Injectable } from '@angular/core';
import { Balance } from '../models/Balance';

@Injectable({
    providedIn: 'root'
  })
export class BalanceService{
    balance: Balance;
}