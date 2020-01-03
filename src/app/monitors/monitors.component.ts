import { Component, OnInit } from '@angular/core';

export class Monitors{
  constructor(
   
    public Id,
    public monitorName:string,
    public methodType:string,
    public url : string,
    public time,
    public email : string,
    public statusCode,
    public apdex,
    public isExecuting :boolean,
    public jsonBody,
    public headers :any,
    public responseSize ,
    public timeStamp,
    public successCount,
    public totalRuns
    )
  {

  }
}
@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
