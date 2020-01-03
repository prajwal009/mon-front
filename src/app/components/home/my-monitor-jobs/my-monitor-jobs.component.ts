import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { Monitors } from 'src/app/monitors/monitors.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-my-monitor-jobs',
  templateUrl: './my-monitor-jobs.component.html',
  styleUrls: ['./my-monitor-jobs.component.scss']
})
export class MyMonitorJobsComponent implements OnInit {

  monitors : Monitors[] 
  monitor: Monitors
  totalMonitorsCount : number
  deleteStatus : string
  isSuccess : boolean = false;
   mySubscription
  constructor(private dataService : DataService,
    private router : Router,

    

    ) { }

  ngOnInit() {

     this.getAllMonitors();
   // this.interval();
    setInterval( ()=> {
      this.getAllMonitors();
      console.log('1234')
    },2000
    );
    

  }


  ngOnDestroy(){
    
  }

  private message :String
 // private isExecuting : boolean
  getAllMonitors()
  {
    this.dataService.getAllApi().subscribe(
      response => {
       this.monitors = response 
       //console.log(this.monitor.isExecuting)
       //this.isExecuting = this.monitor.isExecuting 
        //this.showStop(this.monitor.isExecuting)
     }
    )
    
    
  }
  
  

  startRun(id){
    console.log(id+"    start run")

    this.dataService.runUrls(id).subscribe(
      response => {
       this.monitor = response 
       alert("Execution Started")   
     }
    )
  }

  stopRun(id){
    console.log(id + " stopped");
    this.dataService.stopUrls(id).subscribe(
      response =>
        alert("Stopped")
    )
    this.ngOnInit();
  }




    deleteMonitor(id){
      
        this.dataService.deleteApi(id).subscribe(
          data => {
            this.deleteStatus = "Deleted Successfully";
           this.ngOnInit();
          } 
        )

    }

    updateMonitor(id){
      console.log(`update ${id}`)
      this.router.navigate(['/home/buildmonitor',id])
    }


    monitorState(id){
      console.log(` state... ${id} ` );
      this.router.navigate(['home/state',id]);
    }

createMonitor(){
      this.router.navigate(['/home/buildmonitor',-1])
    }


    // saveMonitor() {
    //   if(this.id == -1) { //=== ==
    //     this.todoService.createTodo('in28minutes', this.todo)
    //         .subscribe (
    //           data => {
    //             console.log(data)
    //             this.router.navigate(['todos'])
    //           }
    //         )
    //   } else {
    //     this.dataService.updateTodo('in28minutes', this.id, this.todo)
    //         .subscribe (
    //           data => {
    //             console.log(data)
    //             this.router.navigate(['todos'])
    //           }
    //         )
    //   }
    // }
  
  }
   
    

