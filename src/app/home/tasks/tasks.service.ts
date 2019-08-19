import { ApiService } from 'src/app/api.service';
import { ITask } from './tasks.model';

/**
 * Сервис для работы с тасками
 */
export class TasksService {
  constructor(private _apiService: ApiService) {}

  /**
   * Получение списка тасок
   */
  getList() {
    return this._apiService.get<ITask[]>('tasks', '/dev/tasks');
  }
}
