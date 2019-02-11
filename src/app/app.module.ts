import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/rutas/inicio/inicio.component';
import { CarritoComponent } from './components/rutas/carrito/carrito.component';
import { ListadeseoComponent } from './components/rutas/listadeseo/listadeseo.component';
import { UsuarioComponent } from './components/rutas/usuario/usuario.component';
import { ElectrodomesticosComponent } from './components/rutas/departamentos/electrodomesticos/electrodomesticos.component';
import { ArteComponent } from './components/rutas/departamentos/arte/arte.component';
import { MueblesComponent } from './components/rutas/departamentos/muebles/muebles.component';
import { BanoComponent } from './components/rutas/departamentos/bano/bano.component';
import { RecomendadosComponent } from './components/rutas/recomendados/recomendados.component';
import { OfertasComponent } from './components/rutas/ofertas/ofertas.component';


//Rutas
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'listadeseo', component: ListadeseoComponent },
  { path: 'electrodomesticos', component: ElectrodomesticosComponent },
  { path: 'arte', component: ArteComponent },
  { path: 'muebles', component: MueblesComponent },
  { path: 'bano', component: BanoComponent },
  { path: 'recomendados', component: RecomendadosComponent },
  { path: 'ofertas', component: OfertasComponent },

  
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },   //cambiar a pagina de error
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    InicioComponent,
    CarritoComponent,
    ListadeseoComponent,
    UsuarioComponent,
    ElectrodomesticosComponent,
    ArteComponent,
    MueblesComponent,
    BanoComponent,
    RecomendadosComponent,
    OfertasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
