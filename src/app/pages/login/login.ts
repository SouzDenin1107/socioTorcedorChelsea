import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  entrar() {
    if (this.email === 'admin@teste.com' && this.senha === '123456') {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/produtos']);
    } else {
      alert('Login inválido! Tente novamente.');
    }
  }
}

