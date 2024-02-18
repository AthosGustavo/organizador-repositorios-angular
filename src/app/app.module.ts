import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRepositoriosComponent } from './componentes/lista-repositorios/lista-repositorios.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { InputComponent } from './componentes/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaRepositoriosComponent,
    NavBarComponent,
    InputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
