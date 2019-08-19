import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { NavController } from '@ionic/angular';
import { TasksService } from './tasks.service';
import { ITask } from './tasks.model';

/**
 * Компонент списка todo
 */
@Component({
  selector: 'task-list',
  templateUrl: 'tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {
  /** список тасок */
  public items: ITask[] = [];
  /** состояния прелоадеров */
  public isPreloader = {
    list: true
  };

  constructor(
    public navCtrl: NavController,
    private _taskService: TasksService,
    private _changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._taskService
      .getList()
      .then((items) => {
        this.items = items;
        this.isPreloader.list = false;
        this._changeDetector.detectChanges();
      })
      .catch((e) => {
        console.error('ERROR:TasksListComponent:getList: ', e);
      });
  }

  /**
   * Функция для отслеживания какие элементы изменились в перебираемом массиве
   * @param _ - index элемента в массиве
   * @param item - элемент массива
   */
  public trackByFn(_, item: ITask) {
    return item.id;
  }
}
