import { Component } from '@angular/core';
import {horizonService} from "./services/horizon";

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>',
  providers: [horizonService]
  
})
export class AppComponent { 

    private messages : any;

    constructor(private horizonService :horizonService) {        
        
    }

}
