import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OperationService } from '../operation.service';
import { BalanceService } from 'src/app/balance/balance.service';
import { Operation } from 'src/app/models/Operation';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  operationSelected = 'income';

  constructor(private operationService: OperationService, private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  submitForm(){
    const operation: Operation = 
    {
      amount: this.addForm.value.amount,
      description: this.addForm.value.description,
      type: this.operationSelected
    };

    this.balanceService.addItem(operation);
    this.operationService.addOperation(operation);
  }

  private initForm(){
    this.addForm = new FormGroup({
      amount: new FormControl(),
      description: new FormControl()
    });
  }

  switchToExpense(){
    this.operationSelected = 'expense';
  }
  switchToIncome(){
    this.operationSelected = 'income';
  }
}
