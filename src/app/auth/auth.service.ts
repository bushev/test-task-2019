import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import Amplify, { Auth } from 'aws-amplify';
import { environment } from '../../environments/environment';
import { from, of } from 'rxjs';
import { ISignInParams } from './signin/signin.model';

/**
 * Сервис для работы с авторизацией/аутентификацией
 */
@Injectable()
export class AuthService {
  constructor() {
    // устанавливаем настройки aws
    Amplify.configure(environment.aws);
  }

  /**
   * Функция авторизации
   * @param param  - логин и пароль
   */
  public signIn({ email, password }: ISignInParams) {
    return from(
      new Promise(async (resolve, reject) => {
        try {
          const user = await Auth.signIn(email, password);
          // если пользователь новый то нужно ему установить новый пароль
          if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            const { requiredAttributes } = user.challengeParam;
            await Auth.completeNewPassword(user, password, requiredAttributes);
          } else if (user.challengeName === 'MFA_SETUP') {
            await Auth.setupTOTP(user);
          }

          resolve(user);
        } catch (err) {
          reject(err);
        }
      })
    );
  }

  /**
   * Функция аутентификации пользователя
   */
  public isAuthenticated() {
    return from(Auth.currentAuthenticatedUser()).pipe(
      map((_) => true),
      catchError((_) => of(false))
    );
  }

  /**
   * Функция разлогина пользователя
   */
  public signOut() {
    Auth.signOut().catch((e) => console.error('ERROR:signOut: ', e));
  }

  /**
   * Получения jwt токена
   */
  public async getJwtToken() {
    return (await Auth.currentSession()).getAccessToken().getJwtToken();
  }
}
