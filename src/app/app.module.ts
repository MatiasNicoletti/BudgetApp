import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './operation/list/list.component';
import { AddComponent } from './operation/add/add.component';
import { DeleteComponent } from './operation/delete/delete.component';
import { BalanceComponent } from './balance/balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent, 
    DeleteComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
