import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './compon/login-register/login-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestPipe } from './test.pipe';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  RouterModule } from '@angular/router';
import { ImgComponent } from './img/img.component';
import { MoviesComponent } from './movies/movies.component';
import { Movies2Component } from './movies2/movies2.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TvComponent } from './tv/tv.component';
import { DiscoverComponent } from './discover/discover.component';
import { DiscovertvComponent } from './discovertv/discovertv.component';
import { DetailsComponent } from './details/details.component';
import { PipPipe } from './pip.pipe';
import { CookieService } from 'ngx-cookie-service';
import { SkeletonModule } from 'primeng/skeleton';
import { Details2Component } from './details2/details2.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    NavbarComponent,
    TestPipe,
    ImgComponent,
    MoviesComponent,
    Movies2Component,
    TvComponent,
    DiscoverComponent,
    DiscovertvComponent,
    DetailsComponent,
    PipPipe,
    Details2Component,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule,
    SkeletonModule,
    NgxSkeletonLoaderModule.forRoot({
      theme: {
        // Enabliong theme combination
        extendsFromRoot: true,
        // ... list of CSS theme attributes
        width:'100%'
      },
    }),
   
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
