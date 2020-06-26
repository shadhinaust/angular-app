import { Routes } from '@angular/router';
import { 
    EventsListComponent, 
    EventDetailsComponent, 
    EventListResolver,
    EventCreateComponent,
    EventRouteActivator
 } from './events/index';
import { Error404Component } from './errors/error-404.component';

export const appRoutes : Routes = [
    {path: 'events/create', component: EventCreateComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: () => import('./user/user.module').then(userModule => userModule.UserModule)}
]