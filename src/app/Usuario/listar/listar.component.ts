import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios!: Usuario[];
  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.service.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data
    })
  }

  Editar(usuario: Usuario):void{
    localStorage.setItem("id",usuario.id.toString());
    this.router.navigate(["editar"]);
  }

  Delete(usuario:Usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data=>{
      this.usuarios=this.usuarios.filter(u=>u!==usuario);
      alert("Usuario eliminado");
    })
  }
}
