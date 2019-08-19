import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

/**
 * Рутовый компонет
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private _platform: Platform,
    private _statusBar: StatusBar,
    private _splashScreen: SplashScreen,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this._platform.ready().then((_) => {
      this._statusBar.styleDefault();
      this._splashScreen.hide();
    });

    this._authService.isAuthenticated().subscribe({
      next: (isAuth) => {
        this._router.navigateByUrl(isAuth ? '/home' : '/auth');
      },
      error: (e) => {
        console.error('ERROR:isAuthenticated: ', e);
      }
    });
  }
}
