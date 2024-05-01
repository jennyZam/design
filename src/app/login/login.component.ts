import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioInput: string = '';
  passwordInput: string = '';

  constructor(private usuarioServicio: UsuarioService,private router: Router) { }

  ngOnInit(): void {
  }

  redirigirUsuario() {
    this.usuarioServicio.usuarios.filter((user) => {
      if(user.usuario === this.usuarioInput && user.password === this.passwordInput) {
        if(user.relacion === 'administrator') {
          this.router.navigate(['administrador']);
        } else if(user.relacion === 'user') {
          this.router.navigate(['usuario']);
        }
      }
    });
  }

}
