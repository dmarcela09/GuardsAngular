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
    console.log('HOLAAAAAAA')
    localStorage.clear();
    this.showButton(true);
    debugger
    getCurrentPath(this.path);
    console.log('landing', getCurrentPath(this.path))
  }
  changeStatusPath() {
    this.status = true;
    savePathStatus(this.status);
    this.showButton(false);
  }
  showButton(status){
    let element = document.querySelector<HTMLElement>('.button')!;
    status ?
      element.style.display = 'flex':
      element.style.display = 'none'
  }

}
