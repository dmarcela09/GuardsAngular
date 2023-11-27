import { Component } from '@angular/core';
import { getCurrentPath, savePathStatus } from '../../utils/navegation';

@Component({
  selector: 'app-spouse-data',
  templateUrl: './spouse-data.component.html',
  styleUrls: ['./spouse-data.component.css']
})
export class SpouseDataComponent {

  public path = '/microflow/spouse-data';
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
