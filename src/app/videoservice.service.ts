import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoserviceService {
  host:String="http://localhost:8081/";

  constructor(private http:HttpClient) { }

  getVideos():Observable<any>{
     return this.http.get(this.host+"files");
  }
}
