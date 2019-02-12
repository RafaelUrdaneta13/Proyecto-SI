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
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ConexionService } from './services/conexion.service';
import { ListaComponent } from './components/firebase/lista/lista.component';
import { ListaAddComponent } from './components/firebase/lista-add/lista-add.component';
import { FormsModule } from  '@angular/forms';


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
    OfertasComponent,
    ListaComponent,
    ListaAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features

  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
