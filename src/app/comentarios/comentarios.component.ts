import { Component, EventEmitter, Output } from '@angular/core';
import { ComentariosHijoComponent } from '../comentarios-hijo/comentarios-hijo.component';

interface IComentarios{
  comentario:string
}

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [ComentariosHijoComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comentarios: IComentarios[] = []

  recibirDato(dato: string){
    this.comentarios.push({comentario: dato})
  }
}
