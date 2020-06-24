import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl:'./events-list.component.html'
})
export class EventsListComponent{
    event = {
        id: 1, 
        name: 'Angular Connect',
        date: '6/24/2020',
        time: '10:30 pm',
        price: 599.00,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: 'Ka-15/3-1, Kuril, Vatara',
            city: 'Dhaka',
            country: 'Bangladesh'
        }
    }
}