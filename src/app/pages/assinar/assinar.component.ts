import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-assinar',
  standalone: true,
  templateUrl: './assinar.html',
  styleUrls: ['./assinar.css'],
  imports: [CommonModule, FormsModule]
})
export class AssinarComponent {

  planoId!: number;

  usuario = {
    nome: '',
    email: '',
    senha: '',
    plano: ''
  };

  planoNome = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit() {
    this.planoId = Number(this.route.snapshot.paramMap.get('id'));

    const nomesPlanos: any = {
      1: 'Sócio++',
      2: 'SócioPlus',
      3: 'SuperSócio'
    };

    this.planoNome = nomesPlanos[this.planoId] || 'Plano Desconhecido';
    this.usuario.plano = this.planoNome;
  }

  assinar() {
    if (!this.usuario.nome || !this.usuario.email || !this.usuario.senha) {
      alert("Preencha todos os campos!");
      return;
    }

    this.usuariosService.criarUsuario(this.usuario).subscribe({
      next: () => {
        alert(`Conta criada com sucesso!\nBem-vindo, ${this.usuario.nome}!`);
        this.router.navigate(['/login']);
      },
      error: () => {
        alert('Erro ao criar usuário!');
      }
    });
  }
}


