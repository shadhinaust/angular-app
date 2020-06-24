import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule
  ],
  declarations: [
    EventAppComponent,
    EventsListComponent
  ],
  bootstrap: [EventAppComponent]
})
export class EventAppModule { }
