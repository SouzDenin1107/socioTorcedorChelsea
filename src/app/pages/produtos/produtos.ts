import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdutosService } from '../../service/produtos.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produtos.html',
  styleUrls: ['./produtos.css']
})
export class ProdutosComponent {

  planos: any[] = [];
  carregando = true;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.carregarPlanos();
  }
  
  carregarPlanos() {
    this.produtosService.getPlanos().subscribe({
      next: (dados) => {
        this.planos = dados;
        this.carregando = false;
      },
      error: (err) => {
        console.log("Erro ao carregar planos:", err);
        this.carregando = false;
      }
    });
  }

  // Ir para página de detalhes
  verDetalhes(id: number) {
    return ['/produto', id];
  }

  // Ir para página de edição
  editarPlano(id: number) {
    return ['/editar-plano', id];
  }
}


