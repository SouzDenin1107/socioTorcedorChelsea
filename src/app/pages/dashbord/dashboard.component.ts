import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

  usuario: any;

  proximosJogos = [
    { adversario: 'Remo', data: '20/11', local: 'Curuzu' },
    { adversario: 'Castanhal', data: '27/11', local: 'Mangueirão' }
  ];

  constructor(
    private auth: AuthService,
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usuario = this.auth.getUsuario();
  }

  excluirConta() {
    if (!this.usuario || !this.usuario.id) {
      alert('Usuário não encontrado.');
      return;
    }

    const confirmar = confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.');
    if (!confirmar) {
      return;
    }

    this.usuariosService.deletarUsuario(this.usuario.id).subscribe({
      next: () => {
        alert('Conta excluída com sucesso!');
        this.auth.logout();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao excluir conta:', err);
        alert('Erro ao excluir conta.');
      }
    });
  }
}






