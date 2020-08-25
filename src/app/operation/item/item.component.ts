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
  @Input() item: Operation;
  editItemForm: FormGroup;
  showModal: boolean = false;
  constructor(private operationService: OperationService, private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onDeleteItem() {
    this.operationService.deleteOperation(this.item);
    this.balanceService.removeItem(this.item);
  }
  onClickedItem() {
    console.log(this.item);
    this.toggleModal();
  }

  onEditItem() {
    const itemUpdated = {
      amount: this.editItemForm.value.amount,
      description: this.editItemForm.value.description,
      type: this.item.type
    }
    this.operationService.editOperation(this.item, itemUpdated);
    this.balanceService.editItem(this.item,itemUpdated);
    this.toggleModal();
  }

  initForm() {
    this.editItemForm = new FormGroup(
      {
        description: new FormControl(this.item.description, [Validators.required, Validators.maxLength(15)]),
        amount: new FormControl(this.item.amount, [Validators.required, Validators.pattern(/^[0-9]*$/)])
      }
    );
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
