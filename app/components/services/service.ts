import { Component } from '@angular/core';
import {horizonService, setMoreService} from "./../../services/index";
import { SetMoreUser, Service } from './../../models/index';
import {AppSettings} from "../appSettings";

@Component({
  selector: 'app-services',
  templateUrl:  AppSettings.PATH + 'services/service.tpl.html',
  providers: [horizonService, setMoreService]
  
})
export class ServicesComponent {    
    
    public ListServices: Array<Service> = [];    
    constructor(private horizonService :horizonService, private setMoreService: setMoreService) {        
        this.load();
    }

    load(){      
      this.setMoreService.getServices().subscribe((services)=>{
            let data : any = services;
            this.ListServices = JSON.parse(data._body);            
      })
    }

}