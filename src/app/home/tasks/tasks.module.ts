import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TasksListComponent } from './tasks.component';
import { TasksService } from './tasks.service';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [TasksListComponent],
  exports: [TasksListComponent],
  providers: [TasksService]
})
export class TasksModule {}
