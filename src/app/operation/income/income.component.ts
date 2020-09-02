import { Component, OnInit, OnDestroy } from '@angular/core';
import { Operation } from 'src/app/models/Operation';
import { Subscription, Subject } from 'rxjs';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit, OnDestroy {

  incomes: Operation[] = [];
  incomesSubject:Subject<Operation[]> = new Subject<Operation[]>();
  private expensesSubscription: Subscription;

  constructor(private operationService: OperationService) { }
  

  ngOnInit(): void {
    this.expensesSubscription = this.operationService.getIncomeListener().subscribe(response => {
      this.incomes = response;
      // console.log(this.incomes);
      this.incomesSubject.next([...this.incomes]);
    });
  }
  ngOnDestroy(): void {
    this.expensesSubscription.unsubscribe();
  }
}
