import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuarioInput: string = '';
  passwordInput: string = '';

  constructor(private usuarioServicio: UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarUsuario() {
    this.usuarioServicio.usuarios.push(new Usuario(this.usuarioInput, this.passwordInput, "user"));
  this.router.navigate(['usuario']);
  }

}
