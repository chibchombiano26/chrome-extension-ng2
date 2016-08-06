import { Component } from '@angular/core';
import {horizonService, setMoreService} from "./../../services/index";
import { SetMoreUser, Service } from './../../models/index';
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
        
        let notify = new Notify();
        let usersSetMore = this.horizonService.horizon("usersSetMore");

        usersSetMore.store({                    
          from: this.user.username,
          text: this.user.password
        }).subscribe((e)=>{
            console.log(e);
        });

        usersSetMore.watch({rawChanges: true}).subscribe(e => {
            notify.notify("Nuevo ingreso", "Alguien ingreso");
        });

        this.setMoreService.login(this.user).subscribe((e)=>{
        notify.notify("Hi " + this.user.username, "Nice to see you again");        
        this.router.navigate(['/service']);
        
      })
    }

}
