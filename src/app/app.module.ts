import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './operation/list/list.component';
import { AddComponent } from './operation/add/add.component';
import { BalanceComponent } from './balance/balance/balance.component';
import { BalanceService } from './balance/balance.service';
import { ItemComponent } from './operation/item/item.component';
import { IncomeComponent } from './operation/income/income.component';
import { ExpenseComponent } from './operation/expense/expense.component';
import { ContainerOperationComponent } from './operation/container-operation/container-operation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OperationService } from './operation/operation.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent, 
    BalanceComponent,
    ItemComponent,
    IncomeComponent,
    ExpenseComponent,
    ContainerOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BalanceService, OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
