import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { OperationService } from '../operation.service';
import { Operation } from 'src/app/models/Operation';
import { Subscription, Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit, OnDestroy {
  expenses: Operation[] = [];
  expensesSubject:Subject<Operation[]> = new Subject<Operation[]>();
  private expensesSubscription: Subscription;

  constructor(private operationService: OperationService) { }
  

  ngOnInit(): void {
    this.expensesSubscription = this.operationService.getExpenseListener().subscribe(response => {
      this.expenses = response;
      this.expensesSubject.next([...this.expenses]);
      // console.log(this.expenses);
    });
  }

  ngOnDestroy(): void {
    this.expensesSubscription.unsubscribe();
  }
}
