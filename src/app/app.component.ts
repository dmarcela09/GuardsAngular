import { Component } from '@angular/core';
import { getCurrentPath } from './utils/navegation';

const navegationMap = require("../app/data/navegation-map.json");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spike-guards';
  public path = '/'

  ngOnInit() {
    getCurrentPath(this.path);
  }

}
