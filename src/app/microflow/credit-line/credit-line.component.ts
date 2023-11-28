import { Component } from '@angular/core';
import { getCurrentPath, savePathStatus, validateRoute } from 'src/app/utils/navegation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-line',
  templateUrl: './credit-line.component.html',
  styleUrls: ['./credit-line.component.css']
})
export class CreditLineComponent {

  constructor(private route: Router){}
  public path = '/microflow/credit-line';
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
    this.status = false;
    savePathStatus(this.status);
  }
}
