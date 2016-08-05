import {Injectable, OnInit, Inject} from "@angular/core";
declare var horizon: any;

@Injectable()
export class horizonService implements OnInit{
    
    horizon :any;

    constructor(@Inject("horizon") private _horizon: any) {  
       debugger
       this.horizon = _horizon;
       let messages = this.horizon("messages");

        messages.store({
            sender: "Bob",
            time: new Date(),
            text: "Hello, World!"
        });
    }

    ngOnInit() {
  
    }

}