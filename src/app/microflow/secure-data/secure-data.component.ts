import { Component } from '@angular/core';
import { getCurrentPath, savePath } from '../../utils/navegation';

@Component({
  selector: 'app-secure-data',
  templateUrl: './secure-data.component.html',
  styleUrls: ['./secure-data.component.css']
})
export class SecureDataComponent {

  public path = '/microflow/secure-data';

  ngOnInit() {
    getCurrentPath(this.path);
  }
  changeStatusPath() {
    const statusPath = true;
    savePath(statusPath);
    localStorage.removeItem('status');
  }

}
