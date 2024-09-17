import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';

  constructor(private cookieService: CookieService) {
    // استخدام الطريقة الصحيحة لتعيين قيمة للكوكيز
    this.cookieService.set('SameSite', 'None');
  }
}
