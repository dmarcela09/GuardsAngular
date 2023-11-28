import { Component } from '@angular/core';
import { getCurrentPath, savePathStatus, validateRoute } from 'src/app/utils/navegation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-data',
  templateUrl: './credit-data.component.html',
  styleUrls: ['./credit-data.component.css']
})
export class CreditDataComponent {

  constructor(private route: Router){}
  public path = '/microflow/credit-data';
  public status = false;

  ngOnInit(){
    localStorage.clear();
    const currentRoute = getCurrentPath(this.path);
    let goToPath = validateRoute(currentRoute);
    if(!goToPath){
      this.route.navigate(['/'])
    }
  }
  changeStatusPath() {
    this.status = false;
    savePathStatus(this.status);
  }
}
