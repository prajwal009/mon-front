import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Monitors } from '../monitors/monitors.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private  _httpClient : HttpClient
  ) { }
  createApi(api)
{
  return this._httpClient.post(`http://localhost:8087/add`,api);
}
getAllApi()
{
  return this._httpClient.get<Monitors[]>(`http://localhost:8087/get`);
}

updateMonitor(api,id)
{
  return this._httpClient.put(`http://localhost:8087/update/${id}`,api);
}

deleteApi(id){
  return this._httpClient.delete(`http://localhost:8087/delete/${id}`);
}

getApi(id){
  //console.log(id+" jasfjosajd")
  return this._httpClient.get<Monitors>(`http://localhost:8087/findOne/${id}`);
}

getTotalCount(){
  return this._httpClient.get(`http://localhost:8087/getTotalCounts`);
}

getSuccessCount(){
  return this._httpClient.get(`http://localhost:8087/getSuccessCounts`);
}

runUrls(id){
  return this._httpClient.get<Monitors>(`http://localhost:8087/runUrls/${id}`)
}

stopUrls(id){
  return this._httpClient.get(`http://localhost:8087/stop/${id}`);
}

}
