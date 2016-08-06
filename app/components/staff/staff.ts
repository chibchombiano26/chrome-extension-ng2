import { Component } from '@angular/core';
import {horizonService, setMoreService} from "./../../services/index";
import { Staff } from './../../models/index';
import {AppSettings} from "../appSettings";

@Component({
  selector: 'app-staff',
  templateUrl:  AppSettings.PATH + 'staff/staff.tpl.html',
  providers: [horizonService, setMoreService]
  
})
export class StaffComponent {    
    
    public ListServices: Array<Staff> = [];    
    constructor(private horizonService :horizonService, private setMoreService: setMoreService) {        
        this.load();
    }

    load(){      
      this.setMoreService.getStaff().subscribe((services)=>{
            let data : any = services;
            this.ListServices = JSON.parse(data._body);            
      })
    }

}