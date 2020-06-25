import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule
  ],
  declarations: [
    NavBarComponent,
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  providers: [
    ToastrService,
    EventService
  ],
  bootstrap: [EventAppComponent]
})
export class EventAppModule { }
