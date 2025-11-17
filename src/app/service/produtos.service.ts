import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProdutosService {

  private apiUrl = 'http://localhost:3000/planos';

  constructor(private http: HttpClient) {}

  // Buscar todos os planos
  getPlanos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Buscar plano por ID
  getPlanoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  atualizarPlano(id: number, plano: any) {
    return this.http.put(`${this.apiUrl}/${id}`, plano);
  }
}
