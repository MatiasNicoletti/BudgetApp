import { Component, OnInit, Input } from '@angular/core';
import { Operation } from 'src/app/models/Operation';
import { OperationService } from '../operation.service';
import { BalanceService } from 'src/app/balance/balance.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item:Operation;
  editItemForm: FormGroup;
  constructor(private operationService: OperationService, private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onDeleteItem(){
    this.operationService.deleteOperation(this.item);
    this.balanceService.removeItem(this.item);
  }
  onEditItem(){
    console.log(this.item);
  }

  initForm(){
    this.editItemForm = new FormGroup(
      {
        description: new FormControl(this.item.description, [Validators.required, Validators.maxLength(15)]),
        amount: new FormControl(this.item.amount, [Validators.required, Validators.pattern(/^[0-9]*$/)])
      }
    );
  }
}
