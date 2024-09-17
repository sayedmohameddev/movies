import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public navisloader:BehaviorSubject<boolean> = new BehaviorSubject(true)
  constructor() { }
}
