import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth';

// Import Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register.html',
  styleUrls: ['../auth-pages.css']
})
export class Register implements OnInit { // Using your 'Register' class name
  registerForm!: FormGroup;

  // Inject AuthService
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);

      // Call the service
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful!', response);
          // We can redirect the user to the login page here
        },
        error: (err) => {
          console.error('Registration failed!', err);
        }
      });
    }
  }
}