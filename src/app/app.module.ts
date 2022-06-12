import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BalancesTotalComponent } from './components/molecules/balances-total/balances-total.component';
import { BalancesComponent } from './components/page/balances/balances.component';
import { CirclesComponent } from './components/atoms/circles/circles.component';
import { BalancesDataComponent } from './components/organisms/balances-data/balances-data.component';
import { GraphBarComponent } from './components/atoms/graph-bar/graph-bar.component';
import { GraphComponent } from './components/molecules/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    BalancesTotalComponent,
    BalancesComponent,
    CirclesComponent,
    BalancesDataComponent,
    GraphBarComponent,
    GraphComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
