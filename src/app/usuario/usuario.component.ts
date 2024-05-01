import { Component, OnInit } from '@angular/core';
import { AplicacionService } from '../aplicacion.services';
import { Aplicacion } from '../aplicacion.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  aplicacion: Aplicacion[]= [];

  constructor(private aplicaionService: AplicacionService ) { }

  ngOnInit(): void {

    this.aplicacion = this.aplicaionService.aplicaciones;
  }

}
