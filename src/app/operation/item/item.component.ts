import { Component, OnInit, Input } from '@angular/core';
import { Operation } from 'src/app/models/Operation';
import { OperationService } from '../operation.service';
import { BalanceService } from 'src/app/balance/balance.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item:Operation;
  constructor(private operationService: OperationService, private balanceService: BalanceService) { }

  ngOnInit(): void {
  
  }

  onDeleteItem(){
    this.operationService.deleteOperation(this.item);
    this.balanceService.removeItem(this.item);
  }

}
