import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './componentes/botao/botao.component';
import { ListaRepositoriosComponent } from './componentes/lista-repositorios/lista-repositorios.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    ListaRepositoriosComponent,

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
