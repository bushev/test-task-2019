import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';

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
    private _navCtrl: NavController
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
        this._navCtrl.navigateForward(isAuth ? '/home' : '/auth');
      },
      error: (e) => {
        console.error('ERROR:isAuthenticated: ', e);
      }
    });
  }
}
