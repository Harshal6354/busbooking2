import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../services/master.service';
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  schedulId: number = 0;

  userSelectSeatArray:number[]=[];
  scheduledata: any;
  ScheduleBusDat:any;
  seatArray: any[] = [
    {
      "seat": "1",
      "Department":6
    },
    {
      "seat": "2",
      "Department":5
    },
    {
      "seat": "3",
      "Department":4
    },
    {
      "seat": "4",
      "Department":5
    },
    {
      "seat": "5",
      "Department":4
    },
    {
      "seat": "6",
      "Department":5
    },
    {
      "seat": "7",
      "Department":6
    },
    {
      "seat": "8",
      "Department":4
    },
    {
      "seat": "9",
      "Department":5
    },
    {
      "seat": "10",
      "Department":6
    },
    {
      "seat": "11",
      "Department":4
    },
    {
      "seat": "12",
      "Department":5
    },
    {
      "seat": "13",
      "Department":6
    },
  ];
   constructor(private activedRout: ActivatedRoute, private masterSrv: MasterService) {
     this.activedRout.params.subscribe((res: any) => {
      
      this.schedulId = res.id;
    })
  }
  color:string="red"

   getUserSeat(){
    this.color="blue";
   }
   getScheduleDataisByid() {
    this.masterSrv.getScehuleById(this.schedulId).subscribe((res: any) => {
      this.scheduledata = res;   
      for (let index = 0; index <= this.scheduledata.totalSeats; index++)
         this.seatArray.push(index)
    })
  }
  
}
