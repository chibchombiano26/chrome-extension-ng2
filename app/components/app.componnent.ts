import { Component } from '@angular/core';
import {horizonService} from "./../services/horizon";
import {setMoreService} from "./../services/set_more";
import { SetMoreUser, Service } from './../models/SetMoreUser';
import {AppSettings} from "./appSettings";
import {Notify} from './../chrome/api';

@Component({
  selector: 'my-app',
  templateUrl:  AppSettings.PATH + 'app.tpl.html',
  providers: [horizonService, setMoreService]
  
})
export class AppComponent { 

    private messages : any;
    public user: SetMoreUser = new SetMoreUser("","");

    constructor(private horizonService :horizonService, private setMoreService: setMoreService) {
     this.user.username = "hefesoft.peluqueria.01@gmail.com";
     this.user.password = "Salon123";        
    }

    
    login(){
        
        this.setMoreService.login(this.user).subscribe((e)=>{        
        let notify = new Notify();
        notify.notify("Hi " + this.user.username, "Nice to see you again");

        this.setMoreService.getServices().subscribe((services)=>{
            let data : any = services;
            let ListServices: Array<Service> = JSON.parse(data._body);            
        })
      })
    }

}
