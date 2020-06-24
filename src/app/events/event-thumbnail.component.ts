import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl:'event-thumbnail.component.html'
})
export class EventThumbnailComponent{
    @Input() eventDetails:any
    @Output() clickMe = new EventEmitter()
    value: string = 'clicked event'
    handleClickMe() {
        this.clickMe.emit(this.value)
    }
}