import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.services';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  
  usuarios: Usuario[]= []; 
  constructor(private usuariosServices: UsuarioService) { }

  ngOnInit(): void {

    this.usuarios= this.usuariosServices.usuarios;
  }



}
