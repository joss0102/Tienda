import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CredentialsService } from '../../services/auth/credentials.service';
import { LoginInterface } from '../../services/interfaces/auth';
import { TokenService } from '../../services/auth/token.service';
import { Router, RouterLink } from '@angular/router';
import { UseStateService } from '../../services/auth/use-state.service';
import { PopupService } from '../../services/utils/popup.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private credentialsService: CredentialsService,
    private tokenService: TokenService,
    private router: Router,
    private useStateService: UseStateService,
    private popupService: PopupService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    // Limpiar cualquier token previo antes de realizar el login
    this.tokenService.clearTokens();

    this.credentialsService.login(this.loginForm.value as LoginInterface).subscribe({
      next: (data) => {
        this.popupService.loader("Cargando...", "Espere un momento");

        setTimeout(() => {
          // Guardamos los nuevos tokens
          this.tokenService.saveTokens(data.token, "234325423423"); // Asumiendo que el refresh token también lo obtienes de la respuesta
          this.useStateService.save(data.username, data.role);
          this.popupService.close();
          this.router.navigate(['/app/control-panel']); // Redirigir a la página de control
        }, 1500);

      },
      error: err => {
        let message;
        if (err.error == "Invalid password") {
          message = "Contraseña incorrecta, inténtelo de nuevo.";
        }
        else if (err.error == "User not found") {
          message = "El usuario no existe. Compruebe los datos o regístrese en la plataforma.";
        }
        else {
          message = err.error;
        }

        this.popupService.showMessage(
          'Ups, ha ocurrido un error', message, 'error'
        );
      }
    });
  }

}
