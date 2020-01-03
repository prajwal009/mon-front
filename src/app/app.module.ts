import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { BuildMonitorComponent } from './components/home/build-monitor/build-monitor.component';
import { MyMonitorJobsComponent } from './components/home/my-monitor-jobs/my-monitor-jobs.component';
import { HttpClientModule } from '@angular/common/http';
import { MonitorsComponent } from './monitors/monitors.component';
import { FormsModule } from "@angular/forms";
import { StateComponent } from './state/state.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    BuildMonitorComponent,
    MyMonitorJobsComponent,
    MonitorsComponent,
    StateComponent,
    RegisterComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
