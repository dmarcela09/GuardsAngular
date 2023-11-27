import { Component } from '@angular/core';
import { getCurrentPath, savePathStatus } from './utils/navegation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spike-guards';
  
  public path = '/'
  public status = false;


  ngOnInit(){

    getCurrentPath(this.path)
  }
  changeStatusPath() {
    let element = document.querySelector<HTMLElement>('.button')!;
    this.status = true;
    savePathStatus(this.status);
    element.style.display = 'none';
  }

}
