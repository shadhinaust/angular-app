import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule
  ],
  declarations: [
    EventAppComponent
  ],
  bootstrap: [EventAppComponent]
})
export class EventAppModule { }
