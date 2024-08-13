import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent {
  stations = [
    { id: 1, name: 'Оленевка' },
    { id: 2, name: 'Веселовка' },
    { id: 3, name: 'Порфирьевка' }
  ];

  constructor(private router: Router) {}

  onStationSelect(stationId: number) {
    this.router.navigate(['/station', stationId]);
  }
}
