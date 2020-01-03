import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private totalCount :any
  private successCount : any
  private failureCount :any
  private averageApdex :any 

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit() {
    this.getTotalCounts();
  }

  getTotalCounts(){

       this.dataService.getTotalCount().subscribe(
        (response:number) => {
         this.totalCount = response.valueOf();    
         console.log(response);
         console.log(this.totalCount); 
         this.getSuccessCounts(this.totalCount); 
       }
      ) 
  }
  getSuccessCounts(totalCount){
    this.dataService.getSuccessCount().subscribe(
      response => {
        this.successCount = response.valueOf();
        this.failureCount = this.totalCount-this.successCount;
    this.averageApdex = this.successCount/this.totalCount;
      }
    )
  }

}
