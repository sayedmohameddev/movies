import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpclint:HttpClient) { }
  getdetails(media:any,id:any):Observable<any>{
    return this.httpclint.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&append_to_response=recommendations,keywords,watch/providers,images,videos,movie_credits`)
  }
  getSimilar(media:string , id:string):Observable<any>
  {
    return this.httpclint.get(`https://api.themoviedb.org/3/${media}/${id}/similar?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&page=1`)
  }
}
