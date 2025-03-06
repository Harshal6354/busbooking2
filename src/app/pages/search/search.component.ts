import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarsoComponent } from "../../carso/carso.component";
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, DatePipe, RouterLink, CarsoComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent  {
  loctions$: Observable<any> = new Observable<any[]>;
  busList: any[] = [ 
    {
      "price": 1000,
      "totalSeats": 35,
      "availableSeat": 22,
      "arrivalTime": "2025-02-21T07:00:10",
      "scheduleID": 5,
      "departureTime": "2025-02-21T17:00:04",
      "busName": "pune",
      "fromLocation": "Nagpur",
      "toLocation": "Pune"
    },
    {
      "price": 1200,
      "totalSeats": 30,
      "availableSeat": 15,
      "arrivalTime": "2025-02-21T08:00:10",
      "scheduleID": 4,
      "departureTime": "2025-02-21T18:00:04",
      "busName": "Nagpur",
      "fromLocation": "Nagpur",
      "toLocation": "Pune"
    },
    {
      "price": 1200,
      "totalSeats": 30,
      "availableSeat": 15,
      "arrivalTime": "2025-02-21T08:00:10",
      "scheduleID": 4,
      "departureTime": "2025-02-21T18:00:04",
      "busName": "Ahmedabad",
      "fromLocation": "Ahmedabad",
      "toLocation": "Gandhinagar"
    },
    {
      "price": 1200,
      "totalSeats": 30,
      "availableSeat": 15,
      "arrivalTime": "2025-02-21T08:00:10",
      "scheduleID": 4,
      "departureTime": "2025-02-21T18:00:04",
      "busName": "Surat",
      "fromLocation": "Surat",
      "toLocation": "Pune"
    },
    {
      "price": 1200,
      "totalSeats": 30,
      "availableSeat": 15,
      "arrivalTime": "2025-02-21T08:00:10",
      "scheduleID": 4,
      "departureTime": "2025-02-21T18:00:04",
      "busName": "Gandhinagar",
      "fromLocation": "Nagpur",
      "toLocation": "Gandhinagar"
    },
    {
      "price": 1000,
      "totalSeats": 40,
      "availableSeat": 20,
      "arrivalTime": "2025-02-21T07:00:10",
      "scheduleID": 6,
      "departureTime": "2025-02-21T17:00:04",
      "busName": "Solapur",
      "fromLocation": "Nagpur",
      "toLocation": "Solapur"
    }
  ];
  newbusList:any=[];
  masterSrv = inject(MasterService);
  searchObj: any =  
  {
      fromLocation:'',
      toLocation:'',
      travelDate: ''
    } 
  getAllLoctions(){
    this.loctions$ = this.masterSrv.getLocations();
  }
  onSearch() {
    const { fromLocation, toLocation, travelDate } = this.searchObj;
    this.masterSrv.searchBus(fromLocation, toLocation, travelDate).subscribe((result: any) => {
      this.busList = result;
    })
  }
}
