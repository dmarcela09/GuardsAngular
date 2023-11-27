import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureDataComponent } from './microflow/secure-data/secure-data.component';
import { EconomicActivityComponent } from './microflow/economic-activity/economic-activity.component';
import { SpouseDataComponent } from './microflow/spouse-data/spouse-data.component';
import { CreditLineComponent } from './microflow/credit-line/credit-line.component';
import { CreditDataComponent } from './microflow/credit-data/credit-data.component';
import { FlowGuard } from './guard/flow.guard';

const routes: Routes = [
  { 
    path: 'secure-data', 
    component: SecureDataComponent,
    canActivate: [FlowGuard]
  },
  { path: 'activity', component: EconomicActivityComponent,
  canActivate: [FlowGuard] },
  { path: 'spouse-data', component: SpouseDataComponent,
  canActivate: [FlowGuard] },
  { path: 'credit-line', component: CreditLineComponent,
  canActivate: [FlowGuard] },
  { path: 'credit-data', component: CreditDataComponent,
  canActivate: [FlowGuard] },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
