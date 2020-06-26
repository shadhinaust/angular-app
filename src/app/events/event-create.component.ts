import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'event-thumbnail',
    templateUrl:'./event-create.component.html',
})
export class EventCreateComponent implements OnInit {
    isDirty: boolean = true 

    constructor(private route: Router){
      
    }
  
    ngOnInit() {

    }

    handleCancel() {
        this.route.navigate(['/events'])
    }
}