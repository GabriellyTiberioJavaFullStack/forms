import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  dadosUsuario = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  }

  enviarForm() {
    alert('Formulário Enviado!')
  }
}
