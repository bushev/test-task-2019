import { FormGroup } from '@angular/forms';

export interface ISignInParams {
  // емайл пользователя
  email: string;
  // пароль пользователя
  password: string;
}

/** Кастомный интерфейс с возможностью прокинуть тип */
export interface CustomFormGroup<V = any> extends FormGroup {
  value: V;
}
