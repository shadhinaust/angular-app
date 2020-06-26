import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';

import { appRoutes } from './routes';
import { Error404Component } from './errors/error-404.component'; 
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventService } from './events/shared/event.service';
import { EventRouteActivator } from './events/shared/event-route-activator.service';
import { EventListResolver } from './events/shared/event-list-resolver.service';
import { EventCreateComponent } from './events/event-create.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    NavBarComponent,
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    Error404Component
  ],
  providers: [
    ToastrService,
    EventService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: EventCreateComponent) {
  if(component.isDirty) {
    return window.confirm('Do you really want to cancel?')
  }
  return true
}