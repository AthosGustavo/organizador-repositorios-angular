import { Component, OnInit } from '@angular/core';
import { ServicoApiService } from '../../services/servico-api.service';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent implements OnInit {
  private repositorios!:any[];

  constructor(private servicoApi: ServicoApiService){}

  ngOnInit(): void {
    this.servicoApi.getRepositorios().subscribe({
      next:(response) => {
        this.repositorios = response;
      },
      error:(error) => {
        console.error(error)
      }
    });
  }

  repoEncontrados: string[] = [];

  encontrarRepo():void{
    this.repoEncontrados.length = 0;

    for(let i = 0; i < this.repositorios?.length;i++){
      const regex = /\bjava\b/i;
      const resultado = regex.test(this.repositorios[i]["name"]);
      if(resultado){
        this.repoEncontrados.push(this.repositorios[i]["html_url"]);
        //console.log(this.repositorios[i]["name"]);
        //console.log(this.repositorios[i]["html_url"]);
      }
    }
  }

}
