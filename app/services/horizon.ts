import {Injectable, OnInit, Inject} from "@angular/core";
@Injectable()
export class horizonService implements OnInit{
    
    horizon :any;

    constructor(@Inject("horizon") private _horizon: any) {
       this.horizon = _horizon;
       let messages = this.horizon("messages");
    }

    ngOnInit() {
  
    }
}