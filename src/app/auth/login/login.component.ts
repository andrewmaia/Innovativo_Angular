import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
  form = new FormGroup({
    usuario: new FormControl('',Validators.required),
    senha: new FormControl('',Validators.required)
  });  

  constructor(public authService: AuthService, public router: Router) {
  }

  onSubmit() {

    this.authService.login(this.form.get('usuario').value,this.form.get('senha').value).subscribe(() => {
      if (this.authService.isLoggedIn()) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/eficacia-canais/relatorio';
        this.router.navigate([redirect]);
      }
    }
    ,(erro)=> {
        if(erro.status==401)
          this.message="Usuário ou Senha Incorretos";
        else
          this.message="Erro Desconhecido";
      }
    );
  }

  
  obterNomePagina(){
    return "Login";
  }  

  obterCaminho(){
    null;
  }   



}