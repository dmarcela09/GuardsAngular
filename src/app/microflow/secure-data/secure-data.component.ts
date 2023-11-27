import { Component } from '@angular/core';
import { savePathStatus, getCurrentPath } from '../../utils/navegation';

@Component({
  selector: 'app-secure-data',
  templateUrl: './secure-data.component.html',
  styleUrls: ['./secure-data.component.css']
})
export class SecureDataComponent {

  public path = '/microflow/secure-data';
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
