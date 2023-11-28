import { Component } from '@angular/core';
import { getCurrentPath, savePathStatus, validateRoute } from '../../utils/navegation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-economic-activity',
  templateUrl: './economic-activity.component.html',
  styleUrls: ['./economic-activity.component.css']
})
export class EconomicActivityComponent {

  constructor(private route: Router){}
  public path = '/microflow/activity';
  public status = false;

  ngOnInit(){
    localStorage.clear();
    const currentRoute = getCurrentPath(this.path);
    let goToPath = validateRoute(currentRoute);
    if(!goToPath){
      this.route.navigate(['/']);
    }
  }
  changeStatusPath() {
    this.status = true;
    savePathStatus(this.status);
  }
}
