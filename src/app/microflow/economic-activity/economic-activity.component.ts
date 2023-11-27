import { Component } from '@angular/core';
import { getCurrentPath, savePath } from '../../utils/navegation';

@Component({
  selector: 'app-economic-activity',
  templateUrl: './economic-activity.component.html',
  styleUrls: ['./economic-activity.component.css']
})
export class EconomicActivityComponent {

  public path = '/microflow/activity';

  ngOnInit() {
    getCurrentPath(this.path);
  }
  changeStatusPath() {
    console.log(this.path)
    console.log('entroPage')
    const statusPath = true;
    savePath(statusPath);
    localStorage.removeItem('status');
  }
}
