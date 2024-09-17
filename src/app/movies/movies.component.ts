import { Component,HostListener,OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { register } from 'swiper/element/bundle';
import { TrendingService } from '../trending.service';
import { MoviesService } from '../movies.service';
import { TvService } from '../tv.service';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '../loader.service';
// register Swiper custom elements
register();

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  trendingmovies:any[]=[]
  trendingtv:any[]=[]
  trendingperson:any[]=[]
  popularmovies:any[]=[]
  nowplayingmovies:any[]=[]
  upcomingmovies:any[]=[]
  topratedmovies:any[]=[]
  airingtodaytv:any[]=[]
  ontheairtv:any[]=[]
  populartv:any[]=[]
  topratedtv:any[]=[]
  nav:any
  isLoading:boolean =true
  isloader:BehaviorSubject<boolean> = new BehaviorSubject(true)
 constructor(private trending:TrendingService ,private movies:MoviesService ,private tv:TvService ,private loader:LoaderService){}
ngOnInit(): void {
  
   this.loader.navisloader.next(true)

  this.tv.getairing_today().subscribe({
    next:(res)=>{
      this.airingtodaytv =res.results
      setTimeout(() => {
        this.isLoading = false
       
      }, 400);
    setTimeout(() => {
      this.isloader.next(false)
    }, 2000);
     
    }
  })
  this.tv.geton_the_air().subscribe({
    next:(res)=>{
      this.ontheairtv =res.results
      setTimeout(() => {
        this.isLoading = false
      }, 400);
    }
  })
  this.tv.getpopular().subscribe({
    next:(res)=>{
      this.populartv =res.results
      setTimeout(() => {
        this.isLoading = false
      }, 400);
    }
  })
  this.tv.gettop_rated().subscribe({
    next:(res)=>{
      this.topratedtv =res.results
      setTimeout(() => {
        this.isLoading = false
      }, 400);
    }
  })
  this.movies.getpopular().subscribe({
    next:(res)=>{
      this.popularmovies = res.results
      setTimeout(() => {
        this.isLoading = false
      }, 400);
      
    }
  })
  this.movies.getnowplaying().subscribe({
    next:(res)=>{
      this.nowplayingmovies = res.results
      setTimeout(() => {
        this.isLoading = false
      }, 400);
    }
  })
  this.movies.getupcoming().subscribe({
    next:(res)=>{
      this.upcomingmovies = res.results
      setTimeout(() => {
        this.isLoading = false
      }, 400);
    }
  })
  this.movies.gettoprated().subscribe({
    next:(res)=>{
      this.topratedmovies = res.results
      setTimeout(() => {
        this.isLoading = false
      }, 400);
    }
  })
  this.trending.gettrending("movie").subscribe({
    next:(res)=>{
      this.trendingmovies = res.results
      setTimeout(() => {
        this.isLoading = false
      }, 400);
      
    }
  })
  this.trending.gettrending("tv").subscribe({
    next:(res)=>{
      this.trendingtv = res.results
      setTimeout(() => {
        this.isLoading = false
      }, 400);
      
    }
  })
  this.trending.gettrending("person").subscribe({
    next:(res)=>{
      this.trendingperson = res.results
      console.log(this.trendingperson);
      
      setTimeout(() => {
        this.isLoading = false
      }, 400);
     
    }
  })
}
customOptions2: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  autoplay:true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  margin: 20,
  autoWidth:true,
  navText: [],
items:1,
  nav: false
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  autoplay:true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  margin: 20,
  navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
responsive:{
 0: {
  items: 2
},
400: {
  items: 2
},
740: {
  items: 3
},
940: {
  items: 8
}
},
  nav: true
}
}
