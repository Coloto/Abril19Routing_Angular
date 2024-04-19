import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

export const routes: Routes = [
    {path:'inicio', title:'Pagina Inicio', component: InicioComponent},
    {path:'donde-estamos', title:'Pagina Donde estamos', component: DondeEstamosComponent},
    {path:'quienes-somos', title:'Pagina Quienes somos', component: QuienesSomosComponent},
    {path:'comentarios', title:'Pagina Comentarios', component: ComentariosComponent}
];
