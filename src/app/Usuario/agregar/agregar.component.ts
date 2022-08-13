import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit() {
  }

  Guardar(): void{
    this.service.createUsuario(this.usuario)
    .subscribe(data=>{
      alert("Usuario agregado");
      this.router.navigate(["listar"]);
    })
  }
}
