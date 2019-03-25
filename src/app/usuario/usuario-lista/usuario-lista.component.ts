import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { UsuarioService }  from '../usuario.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {
  usuarios$: Observable<Usuario[]>;

  constructor(
    private service: UsuarioService,
  ) { }

  ngOnInit() {
    this.usuarios$ = this.service.obterUsuarios();
  }
  obterNomePagina(){
    return "Usuários";
  }

  obterCaminho(){
    return ['Home','Usuários'];
  }
}

