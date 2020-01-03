//import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-state',
//   templateUrl: './state.component.html',
//   styleUrls: ['./state.component.scss']
// })
// export class StateComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

//................................active

import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../state/canvasjs.min';
import { Monitors } from '../monitors/monitors.component';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartsModule } from 'angular-bootstrap-md';
 
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
 

  monitor : Monitors
  id

  count =1


  status: any
  date: Date = new Date()
   Target
  //Target = this.monitor.url
  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private router : Router
  ) {
    // this.status = [
    //   { Timestamp: this.date.toDateString(), Status_Code: 200, Response_Time: 105, Response_Size: 881, Summary: 'Failed to validate:Response status code is not between 400 and 400 inclusive.' },
    //   { Timestamp: this.date.toDateString(), Status_Code: 200, Response_Time: 105, Response_Size: 881, Summary: 'Failed to validate:Response status code is not between 400 and 400 inclusive.' },
    //   { Timestamp: this.date.toDateString(), Status_Code: 200, Response_Time: 105, Response_Size: 881, Summary: 'Failed to validate:Response status code is not between 400 and 400 inclusive.' },
    //   { Timestamp: this.date.toDateString(), Status_Code: 200, Response_Time: 105, Response_Size: 881, Summary: 'Failed to validate:Response status code is not between 400 and 400 inclusive.' }
    // ]
  };
 
  ngOnInit() {
 

    this.monitor = new Monitors('','','','','','','','',false,'','','','','','')
    
    this.id = this.route.snapshot.params['id'];
  this.service.getApi(this.id)
      .subscribe (
        data => {this.monitor = data

        this.Target = this.monitor.url
          this.chartCreate(this.monitor.responseSize,this.monitor.time);
          //this.createSuccessChart(this.monitor.successCount,this.monitor.totalCount,this.monitor.apdex)

        }
      )



    // let min1 = this.date.getMinutes() - 10
    // let min2 = this.date.getMinutes() - 5
    // let chart = new CanvasJS.Chart("chartContainer1", {
    //   // animationEnabled: true,
    //   // exportEnabled: true,
    //   // backgroundColor: "aqua",
 
    //   data: [{
    //     type: "line",
    //     dataPoints: [

    //       { y: 0.0, label: this.date.getHours() + ":" + min1 },
    //       { y: 0.3, label: this.date.getHours() + ":" + min2 },
    //       { y: 1.5, label: this.date.getHours() + ":" + this.date.getMinutes() }
        
    //     ]
    //   }]
      
      

    // });

  



    

    
    
    


 
    //chart.render();
    //chart1.render();
   // chart2.render();
  }

   
    chartCreate(size,time){
      var dataPoints = []
      let chart1 = new CanvasJS.Chart("chartContainer2", {
        data: [{
          type: "line",
          dataPoints: dataPoints
        }] 
      });
      dataPoints.push({ x: 0.0, y:0 },
        { x: 1, y: parseInt(size) })
        setInterval(() => {
                  this.service.getApi(this.id)
              .subscribe (
                data => {this.monitor = data
                  size = this.monitor.responseSize;
                  
                  this.createSuccessChart(this.monitor.successCount,this.monitor.totalRuns,this.monitor.apdex)

                  dataPoints.push({x: this.count++,y: parseInt(size) })
                  
                }
              )
              
              console.log("hit")
              chart1.render();
          }, time*1000);
          

    }
 
    createSuccessChart(successCount,totalCount,apdex){
      console.log(successCount + " successcount")
      console.log(totalCount + " totalCount")
      var dataPoints =[]
      let chart2 = new CanvasJS.Chart("chartContainer3", {
        axisY: {
          minimum: 0,
          maximum: 100
        },
        // animationEnabled: true,
        // exportEnabled: true,
        data: [{
          type: "line",
          dataPoints:dataPoints
        }]
      }); 
      dataPoints.push({x:0,y:0})
      dataPoints.push({x:parseInt(successCount),y:parseInt(totalCount)})
      chart2.render(); 
      this.monitor.apdex = apdex;
    }







 
}