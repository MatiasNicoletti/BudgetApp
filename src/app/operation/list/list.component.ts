import { Component, OnInit, Input } from '@angular/core';
import { Operation } from 'src/app/models/Operation';
import { Subscription, Subject } from 'rxjs';
import { OperationService } from '../operation.service';
import { ExpenseComponent } from '../expense/expense.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // incomes: Operation[] = [];
  // expenses: Operation[] = [];
  // private incomesSubscription: Subscription;
  // private expensesSubscription: Subscription;
  @Input('itemList') itemListSubject:Subject<Operation[]> = new Subject<Operation[]>();
  itemList: Operation[] = [];
  constructor() { }
  
  ngOnInit(): void {
    this.itemListSubject.subscribe(response => {this.itemList = response});
  }

}
