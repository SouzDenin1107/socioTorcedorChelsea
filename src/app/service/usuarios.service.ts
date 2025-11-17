import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuariosService {

  private api = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  criarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.api, usuario);
  }

  buscarUsuarioPorEmail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}?email=${email}`);
  }

  deletarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}


