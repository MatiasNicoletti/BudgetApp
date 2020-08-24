import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OperationService } from '../operation.service';
import { BalanceService } from 'src/app/balance/balance.service';
import { Operation } from 'src/app/models/Operation';
import { isNumber } from 'util';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  operationSelected = 'income';
  // isAmountIncorrect:boolean = this.isAmountIncorrec();

  constructor(private operationService: OperationService, private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.addForm.controls['amount']);
  }

  submitForm() {
    if (this.addForm.valid) {
      const operation: Operation =
      {
        amount: this.addForm.value.amount,
        description: this.addForm.value.description,
        type: this.operationSelected
      };
      this.balanceService.addItem(operation);
      this.operationService.addOperation(operation);
    }

  }

  private initForm() {
    this.addForm = new FormGroup({
      amount: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(15)])
    });
  }

  switchToExpense() {
    this.operationSelected = 'expense';
  }
  switchToIncome() {
    this.operationSelected = 'income';
  }

}
