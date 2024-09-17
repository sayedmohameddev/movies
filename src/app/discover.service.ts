import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  constructor(private httpclint:HttpClient) { }
  getdiscovermovies(page?:any,sort?:any,id?:any,year?:any):Observable<any>{
    return this.httpclint.get(`https://api.themoviedb.org/3/discover/movie?api_key=d8ee4593b0ab8f467c78021e8e927254&with_genres=${id}&year=${year}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}`)
  }
  getdiscovertv(page?:any,sort?:any,id?:any,year?:any):Observable<any>{
    return this.httpclint.get(`https://api.themoviedb.org/3/discover/tv?api_key=d8ee4593b0ab8f467c78021e8e927254&with_genres=${id}&year=${year}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}`)
  }
}
