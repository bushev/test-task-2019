import { CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
// import { take } from 'rxjs/operators';
// import { NavController } from '@ionic/angular';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(
    private _authService: AuthService // private _navCtrl: NavController
  ) {}

  canLoad() {
    // @todo подумать, как сделать редирект если пользовать не аутентифицирован
    // this._authService
    //   .isAuthenticated()
    //   .pipe(take(1))
    //   .subscribe({
    //     next: (isAuth) => {
    //       if (!isAuth) {
    //         this._navCtrl.navigateForward('auth');
    //       }
    //     }
    //   });

    return this._authService.isAuthenticated();
  }
}
