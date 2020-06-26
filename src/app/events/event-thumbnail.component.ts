import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html',
    styles:[`
    .green { color: green !important;}
    .blue { color: blue !important;}
    .red { color: red !important;}
    .bold {font-weight: bold;}
    `]
})
export class EventThumbnailComponent{
    @Input() eventDetails:any

    getStartTimeClass(){
        if(this.eventDetails && this.eventDetails.time === '8:00 am'){
            return ['green', 'bold']
        }
        else if(this.eventDetails && this.eventDetails.time === '10:00 am'){
            return ['blue', 'bold']
        }
        else{
            return 'red'
        }
    }
}