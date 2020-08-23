import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  operationSelected = 'income';

  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
    this.initForm();
  }

  submitForm(){
    // console.log(this.operationSelected);
    // console.log(this.addForm.value.amount);
    this.operationService.addOperation(
      {amount: this.addForm.value.amount, 
      description: this.addForm.value.description,
      type: this.operationSelected
    });
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
