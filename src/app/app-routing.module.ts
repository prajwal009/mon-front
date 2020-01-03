import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { BuildMonitorComponent } from './components/home/build-monitor/build-monitor.component';
import { MyMonitorJobsComponent } from './components/home/my-monitor-jobs/my-monitor-jobs.component';
import { getLocaleId } from '@angular/common';
import { StateComponent } from './state/state.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'buildmonitor/:id', component: BuildMonitorComponent},
      {path: 'mymonitor', component: MyMonitorJobsComponent},
      {path: 'state/:id',component:StateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //private id :number;
 }
