import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecureDataComponent } from './microflow/secure-data/secure-data.component';
import { EconomicActivityComponent } from './microflow/economic-activity/economic-activity.component';
import { SpouseDataComponent } from './microflow/spouse-data/spouse-data.component';
import { CreditLineComponent } from './microflow/credit-line/credit-line.component';
import { CreditDataComponent } from './microflow/credit-data/credit-data.component';
import { FlowGuard } from './guard/flow.guard';

@NgModule({
  declarations: [
    AppComponent,
    SecureDataComponent,
    EconomicActivityComponent,
    SpouseDataComponent,
    CreditLineComponent,
    CreditDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ FlowGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
