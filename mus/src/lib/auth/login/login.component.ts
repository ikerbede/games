import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  selector: 'mus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = new FormGroup({
    name: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    password: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    this.authService.login(
      this.credentials.controls.name.value,
      this.credentials.controls.password.value
    )
      .subscribe(() => {
        if (this.authService.handId) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl ?
            this.router.parseUrl(this.authService.redirectUrl) : '/game';

          // Redirect the user
          this.router.navigateByUrl(redirect);
        }
      });
  }

  logout() {
    this.authService.logout();
  }
}
