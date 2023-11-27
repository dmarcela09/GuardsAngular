import { Component } from '@angular/core';
import { getCurrentPath, savePath } from '../../utils/navegation';

@Component({
  selector: 'app-spouse-data',
  templateUrl: './spouse-data.component.html',
  styleUrls: ['./spouse-data.component.css']
})
export class SpouseDataComponent {

  public path = '/microflow/spouse-data';

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
