import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {Authenticate} from '@nx-learning/data-models';

@Component({
  selector: 'nx-learning-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }

}
