import { Component, OnInit, OnDestroy } from '@angular/core';
import { BalanceService } from '../balance.service';
import { Balance } from 'src/app/models/Balance';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit, OnDestroy {
  balance: Balance;
  balanceSubscription: Subscription;

  constructor(private balanceService: BalanceService) { }

  ngOnInit(): void {
    
    this.balance = this.balanceService.getBalance();
    this.balanceSubscription = this.balanceService.getBalanceListener().subscribe(newBalance => {
      console.log(newBalance);
      this.balance = newBalance;
    }, error => () => {
      
    });
  }

  ngOnDestroy():void{
    this.balanceSubscription.unsubscribe();
  }

}
