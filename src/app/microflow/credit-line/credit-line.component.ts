import { Component } from '@angular/core';
import { getCurrentPath, savePathStatus } from 'src/app/utils/navegation';

@Component({
  selector: 'app-credit-line',
  templateUrl: './credit-line.component.html',
  styleUrls: ['./credit-line.component.css']
})
export class CreditLineComponent {

  public path = '/microflow/credit-line';
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
