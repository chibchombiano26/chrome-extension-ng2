import { Component } from '@angular/core';
import {horizonService} from "./services/horizon";
import {setMoreService} from "./services/set_more";
import { SetMoreUser, Service } from './models/SetMoreUser';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>',
  providers: [horizonService, setMoreService]
  
})
export class AppComponent { 

    private messages : any;

    constructor(private horizonService :horizonService, private setMoreService: setMoreService) {

        

        setMoreService.login(new SetMoreUser("hefesoft.peluqueria.01@gmail.com","Salon123")).subscribe((e)=>{
            setMoreService.getServices().subscribe((services)=>{
                
                let data : any = services;
                let ListServices: Array<Service> = JSON.parse(data._body);

                
            })
        })
    }

}