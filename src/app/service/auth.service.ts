import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  usuarioLogado: any = null;

  constructor(private usuariosService: UsuariosService) {}

  login(email: string, senha: string): Observable<boolean> {
    return this.usuariosService.buscarUsuarioPorEmail(email).pipe(
      map((usuarios) => {
        if (usuarios.length > 0 && usuarios[0].senha === senha) {
          this.usuarioLogado = usuarios[0];
          return true;
        }
        return false;
      })
    );
  }

  getUsuario() {
    return this.usuarioLogado;
  }

  isLogged() {
    return this.usuarioLogado !== null;
  }

  logout() {
    this.usuarioLogado = null;
  }
}


