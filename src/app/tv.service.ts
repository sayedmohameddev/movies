import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpclint:HttpClient) { }
  gettrending(number:any,type:any):Observable<any>{
    return this.httpclint.get(`https://api.themoviedb.org/3/tv/${type}?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&page=${number}`)
    }
    getairing_today():Observable<any>{
      return this.httpclint.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&page=1`)
      }
      geton_the_air():Observable<any>{
        return this.httpclint.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&page=1`)
        }
        getpopular():Observable<any>{
          return this.httpclint.get(`https://api.themoviedb.org/3/tv/popular?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&page=1`)
          }
          gettop_rated():Observable<any>{
            return this.httpclint.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&page=1`)
            }
}
