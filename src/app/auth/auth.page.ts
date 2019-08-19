import { Component } from '@angular/core';
import { AuthService } from './auth.service';

/**
 * Рутовый компонент для авторизации/регистрации и т.д.
 */
@Component({
  selector: 'app-auth',
  templateUrl: 'auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage {
  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this._authService.signOut();
  }
}
