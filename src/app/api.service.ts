import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { AuthService } from './auth/auth.service';

/**
 * Сервис для работы с апи
 */
@Injectable()
export class ApiService {
  constructor(private _authService: AuthService) {}

  /**
   * Api get запрос с установкой Authorization
   * @param apiName - имя апи (смотреть в enviroments)
   * @param path - путь от хоста (endpoint)
   * @param params - дополнительные параметры
   */
  public async get<R>(apiName: string, path: string, params = {}): Promise<R> {
    return API.get(apiName, path, {
      Authorization: `Bearer ${await this._authService.getJwtToken()}`,
      ...params
    });
  }
}
