import { Routes } from '@angular/router';
import { StationListComponent } from './components/station-list/station-list.component';
import { SensorDetailsComponent } from './components/sensor-details/sensor-details.component';

export const appRoutes: Routes = [
  { path: '', component: StationListComponent },
  { path: 'station/:id', component: SensorDetailsComponent },
];
