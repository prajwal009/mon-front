import { Component, OnInit } from '@angular/core';
import { Data, Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Monitors } from 'src/app/monitors/monitors.component';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-build-monitor',
  templateUrl: './build-monitor.component.html',
  styleUrls: ['./build-monitor.component.scss']
})
export class BuildMonitorComponent implements OnInit {
  method : string
  monitor : Monitors
  id=-1;
  interval : string
  jsonBody:Object
  monitor_name
  public headers: any[] = [{
    headerKey: '',
    headerValue: ''
  }];

  //addedStatus : string ='';
  constructor(private service : DataService,
    private route: ActivatedRoute,
    private router : Router
    ) {


     }

     
  ngOnInit() {
 this.monitor = new Monitors('','','','','','','','',false,'','','','','','') 
    

 this.id = this.route.snapshot.params['id'];
if(this.id!=-1) {
  this.service.getApi(this.id)
      .subscribe (
        data => {this.monitor = data
        console.log(data)
        })
}


  }


  addHeader() {
    this.headers.push({
      headerKey: '',
      headerValue: ''
    });
    //console.log(this.headers);
    this.monitor.headers = this.headers;
    //console.log(this.monitor.headers + " ....hereee");

  }
 
  removeHeader(i: number) {
    this.headers.splice(i, 1);
  }

  getMonitor(){
      console.log(this.id + "  asa  before")
      this.id = this.route.snapshot.params['id'];
      console.log(this.id+ " ,,,,after")
    
    
    if(this.id!=-1) {
      this.service.getApi(this.id)
          .subscribe (
            //response => this.monitor = response
          )
    }
  }

  saveApi()
  {
   
    this.monitor.jsonBody = this.jsonBody;

    this.monitor.headers = this.headers;
    this.monitor_name =this.monitor.monitorName;
  
    if(this.id == -1){
      this.service.createApi(this.monitor).subscribe(
        data => {
        console.log(data);
        //this.addedStatus = 'Autosaved!';
      },error=>{
        console.log(error);
        
      })
      this.router.navigate(['home/mymonitor']);
    } else{
      this.service.updateMonitor(this.monitor,this.id).subscribe(
        data=>{
          console.log(data)
          this.router.navigate(['home/mymonitor']);
        }
      )
    }
    
      
      
  
}

// createHeaderBlock(){
//   console.log("creating...")
//   document.getElementById('addHeaders').innerHTML += ' <br> <div class="row"> <div class="col-2" ><input type="text" placeholder="Name" class="form-control" ></div> <div class="col-3" ><input type="text" placeholder="Value" class="form-control" ></div> <a class="fa fa-trash" ></a> </div> '

//   document.getElementById('deleteHeader').addEventListener("click",this.deleteHeaderBlock,true);
// }

// deleteHeaderBlock(){
//   console.log("deleting");
// }

}

