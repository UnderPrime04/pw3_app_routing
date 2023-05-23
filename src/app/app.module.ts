import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarProdutoComponent,
    ListarProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
