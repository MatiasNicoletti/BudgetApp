import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './operation/list/list.component';
import { AddComponent } from './operation/add/add.component';
import { DeleteComponent } from './operation/delete/delete.component';
import { BalanceComponent } from './balance/balance/balance.component';
import { BalanceService } from './balance/balance.service';
import { ItemComponent } from './operation/item/item.component';
import { IncomeComponent } from './operation/income/income.component';
import { ExpenseComponent } from './operation/expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent, 
    DeleteComponent,
    BalanceComponent,
    ItemComponent,
    IncomeComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
