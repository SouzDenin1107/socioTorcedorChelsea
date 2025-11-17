import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutosService } from '../../service/produtos.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-trocar-plano',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trocar-plano.html',
  styleUrls: ['./trocar-plano.css']
})
export class TrocarPlanoComponent {

  planos: any[] = [];
  usuario: any;

  constructor(
    private produtosService: ProdutosService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usuario = this.auth.getUsuario();  // <-- MODO CORRETO

    this.produtosService.getPlanos().subscribe(dados => {
      this.planos = dados;
    });
  }

  escolher(plano: any) {

    // Atualiza o usuário logado
    this.usuario.plano = plano.nome;

    alert("Plano alterado com sucesso!");

    // Redireciona ao dashboard
    this.router.navigate(['/dashboard']);
  }
}

