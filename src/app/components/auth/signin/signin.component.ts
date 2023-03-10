import { LoaderService } from './../../shared/loader.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../shared-style.css', './signin.component.css'],
})
export class SigninComponent implements OnInit {
  loading = false;
  constructor(
    private matSnackBar: MatSnackBar,
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.updatedLoaderListener().subscribe({
      next: (loading) => {
        this.loading = loading;
      },
    });
  }
  onSignin(form: NgForm) {
    if (form.invalid) return;
    const user = form.value as { email: string; password: string };
    this.authService.signin(user).subscribe({
      next: (response) => {
        const { token, user } = response;
        this.authService.setupSuccessAuth(token, user._id!);
      },
      error: (err) => {
        const errMsg = err.error.message;
        this.matSnackBar.open(errMsg, '', {
          panelClass: ['warn-bg'],
        });
        if (err.status == 404) {
          form.controls['email'].reset();
        } else if (err.status == 401) {
          form.controls['password'].reset();
        }
      },
    });
  }
}
