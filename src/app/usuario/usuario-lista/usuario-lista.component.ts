import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
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
  selectedId: number;  

  constructor(
    private service: UsuarioService,
    private route: ActivatedRoute    
  ) { }

  ngOnInit() {
    this.usuarios$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id'); //o + na frente converte para number
        return this.service.obterUsuarios();
      })
    );     
  }
  obterNomePagina(){
    return "Usuários";
  }

  obterCaminho(){
    return ['Home','Usuários'];
  }
}

