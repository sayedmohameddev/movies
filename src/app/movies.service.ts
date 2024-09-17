import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
movies:any=new BehaviorSubject('')
  constructor(private httpclint:HttpClient) { }
  gettrending(number:any,type:any):Observable<any>{
    return this.httpclint.get(`https://api.themoviedb.org/3/movie/${type}?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&page=${number}`)
    }
    getpopular():Observable<any>{
      return this.httpclint.get(`https://api.themoviedb.org/3/movie/popular?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&page=1`)
      }
      gettoprated():Observable<any>{
        return this.httpclint.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&page=1`)
        }
        getupcoming():Observable<any>{
          return this.httpclint.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&page=1`)
          }
          getnowplaying():Observable<any>{
            return this.httpclint.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d8ee4593b0ab8f467c78021e8e927254&language=en-US&page=1`)
            }
}
