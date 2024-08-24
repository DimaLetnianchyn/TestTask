import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StationService } from '../../services/station.service'; 

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations: any[] = [];

  constructor(private stationService: StationService, private router: Router) {}

  ngOnInit(): void {
    this.stationService.getStations().subscribe(
      (data: any[]) => { // Указание типа данных
        this.stations = data;
      },
      (error: any) => { // Указание типа ошибки
        console.error('Ошибка при загрузке станций:', error);
      }
    );
  }

  onStationSelect(stationId: number) {
    this.router.navigate(['/station', stationId]);
  }
}
