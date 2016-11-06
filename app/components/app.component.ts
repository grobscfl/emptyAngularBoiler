import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/template.html'
})
export class AppComponent { 
  title: string;
  constructor() {
    this.title = 'Hello World You\'re the best';
  }
}
