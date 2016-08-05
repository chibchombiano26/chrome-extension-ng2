import { Component } from '@angular/core';
import {horizonService, setMoreService} from "./../../services/index";
import { SetMoreUser, Service } from './../../models/SetMoreUser';
import {AppSettings} from "../appSettings";
import {Notify} from './../../chrome/api';
 import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl:  AppSettings.PATH + 'login/login.tpl.html',
  providers: [horizonService, setMoreService]
  
})
export class LoginComponent { 

    private messages : any;
    public user: SetMoreUser = new SetMoreUser("","");
    router: Router;

    constructor(_router: Router, private horizonService :horizonService, private setMoreService: setMoreService) {
     
     this.user.username = "hefesoft.peluqueria.01@gmail.com";
     this.user.password = "Salon123";
     this.router = _router;        
    }

    
    login(){
        
        debugger
        let usersSetMore = this.horizonService.horizon("usersSetMore");

        usersSetMore.store({
          id: 1,          
          from: this.user.username,
          text: this.user.password
       }).watch().subscribe(allChannels => {
            console.log('Channels: ', allChannels);
       });

        this.setMoreService.login(this.user).subscribe((e)=>{

        let notify = new Notify();
        notify.notify("Hi " + this.user.username, "Nice to see you again");        
        this.router.navigate(['/service']);
        
      })
    }

}
