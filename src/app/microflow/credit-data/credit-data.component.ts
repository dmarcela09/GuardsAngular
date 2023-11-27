import { Component } from '@angular/core';
import { getCurrentPath, savePathStatus } from 'src/app/utils/navegation';

@Component({
  selector: 'app-credit-data',
  templateUrl: './credit-data.component.html',
  styleUrls: ['./credit-data.component.css']
})
export class CreditDataComponent {

  public path = '/microflow/credit-data';
  public status = false;

  ngOnInit(){
    localStorage.clear();
    getCurrentPath(this.path)
  }
  changeStatusPath() {
    this.status = false;
    savePathStatus(this.status);
  }
}
