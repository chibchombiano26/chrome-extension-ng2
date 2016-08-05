import { Component } from '@angular/core';
import {horizonService, setMoreService} from "./../../services/index";
import { Customer } from './../../models/index';
import {AppSettings} from "../appSettings";

@Component({
  selector: 'app-customer',
  templateUrl:  AppSettings.PATH + 'customer/customer.tpl.html',
  providers: [horizonService, setMoreService]
  
})
export class CustomersComponent {    
    
    public ListCustomer: Array<Customer> = [];    
    constructor(private horizonService :horizonService, private setMoreService: setMoreService) {        
        this.load();
    }

    load(){
      debugger
      this.setMoreService.getCustomers().subscribe((services)=>{
            let data : any = services;
            this.ListCustomer = JSON.parse(data._body);            
      })
    }

}