import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomFormGroup, ISignInParams } from './signin.model';
import { NavController } from '@ionic/angular';

/**
 * Компонент авторизации
 */
@Component({
  selector: 'app-auth-sign-in',
  templateUrl: 'signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  /** состояния прелоадеров */
  public isPreloader = {
    form: false
  };
  /** объект формы */
  public form: CustomFormGroup<ISignInParams> = this._formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required])]
  });

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _changeDetector: ChangeDetectorRef,
    private _navCtrl: NavController
  ) {}

  /**
   * Метод отправки формы
   */
  onSubmit() {
    this.isPreloader.form = true;

    this._authService.signIn(this.form.value).subscribe({
      next: (_) => {
        this._navCtrl.navigateForward('/home');
      },
      error: (error) => {
        this.isPreloader.form = false;
        this._changeDetector.detectChanges();
        console.error('ERROR:onSubmit: ', error);
      }
    });
  }
}
