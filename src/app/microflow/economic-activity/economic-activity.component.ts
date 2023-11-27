import { Component } from '@angular/core';
import { getCurrentPath, savePathStatus } from '../../utils/navegation';

@Component({
  selector: 'app-economic-activity',
  templateUrl: './economic-activity.component.html',
  styleUrls: ['./economic-activity.component.css']
})
export class EconomicActivityComponent {

  public path = '/microflow/activity';
  public status = false;

  ngOnInit(){
    localStorage.clear();
    getCurrentPath(this.path)
  }
  changeStatusPath() {
    this.status = true;
    savePathStatus(this.status);
  }
}
