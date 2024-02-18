import { Component } from '@angular/core';
import { ServicoApiService } from '../../services/servico-api.service';

@Component({
  selector: 'app-lista-repositorios',
  templateUrl: './lista-repositorios.component.html',
  styleUrl: './lista-repositorios.component.css'
})
export class ListaRepositoriosComponent {
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

  //repoEncontrados: string[] = [];
  repoEncontrados:{nome:string; link:string}[] = [];

  encontrarRepo():void{
    this.repoEncontrados.length = 0;

    for(let i = 0; i < this.repositorios?.length;i++){
      const regex = /\bjava\b/i;
      const resultado = regex.test(this.repositorios[i]["name"]);
      if(resultado){
        //this.repoEncontrados.push(this.repositorios[i]["html_url"]);
        //console.log(this.repositorios[i]["name"]);
        //console.log(this.repositorios[i]["html_url"]);
        this.repoEncontrados.push({nome:this.repositorios[i]["name"], link:this.repositorios[i]["html_url"]})


      }
    }
  }
}
