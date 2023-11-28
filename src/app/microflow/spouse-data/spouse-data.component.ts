import { Component } from '@angular/core';
import { getCurrentPath, savePathStatus, validateRoute } from '../../utils/navegation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spouse-data',
  templateUrl: './spouse-data.component.html',
  styleUrls: ['./spouse-data.component.css']
})
export class SpouseDataComponent {

  constructor(private route: Router){};
  public path = '/microflow/spouse-data';
  public status = false;

  ngOnInit(){
    localStorage.clear();
    const currentRoute = getCurrentPath(this.path);
    let goToPath = validateRoute(currentRoute);
    if(!goToPath){
      debugger
      this.route.navigate(['/']);
    }
  }
  changeStatusPath() {
    this.status = false;
    savePathStatus(this.status);
  }

}
