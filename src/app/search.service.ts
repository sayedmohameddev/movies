import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpclint:HttpClient) { }
  getsearch(params:any,page:any):Observable<any>{
return this.httpclint.get(`https://api.themoviedb.org/3/search/multi?api_key=c04c56b8aeb3dce3acdfd16eb3ca314b&language=en-US&query=${params}&page=${page}&include_adult=false`)
  }
  
}
