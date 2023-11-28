import { Component } from '@angular/core';
import { savePathStatus, getCurrentPath, validateRoute } from '../../utils/navegation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-data',
  templateUrl: './secure-data.component.html',
  styleUrls: ['./secure-data.component.css']
})
export class SecureDataComponent {

  constructor(private route: Router){}
  
  public path = '/microflow/secure-data';
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
