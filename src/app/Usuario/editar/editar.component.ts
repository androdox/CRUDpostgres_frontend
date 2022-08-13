import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    if (id) {
      this.service.getUsuarioId(+id)
        .subscribe(data => {
          this.usuario = data;
        })
    }
  }
  
  Actualizar(usuario: Usuario) {
    this.service.updateUsuario(usuario)
      .subscribe(data => {
        this.usuario = data;
        alert("Se Actualizo con Exito...!!!");
        this.router.navigate(["listar"]);
      })
  }

}
