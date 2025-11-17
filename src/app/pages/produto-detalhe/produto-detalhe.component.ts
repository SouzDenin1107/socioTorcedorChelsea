import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProdutosService } from '../../service/produtos.service';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- ADICIONADO RouterModule
  templateUrl: './produto-detalhe.html',
  styleUrls: ['./produto-detalhe.css']
})
export class ProdutoDetalheComponent {

  plano: any;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarPlano(id);
  }

  carregarPlano(id: number) {
    this.produtosService.getPlanoById(id).subscribe({
      next: (dados) => this.plano = dados,
      error: (err) => console.log('Erro ao carregar plano:', err)
    });
  }
}

