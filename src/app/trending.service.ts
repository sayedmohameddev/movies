import { HttpClient } from '@angular/common/http';
import { Injectable ,HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
 
  constructor(private httpclint:HttpClient ) { 
    
  }

gettrending(param:any):Observable<any>{
return this.httpclint.get(`https://api.themoviedb.org/3/trending/${param}/week?api_key=d8ee4593b0ab8f467c78021e8e927254`)
}
}
