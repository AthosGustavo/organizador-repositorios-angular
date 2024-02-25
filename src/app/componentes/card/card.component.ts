import { Component, OnInit } from '@angular/core';
import { ServicoApiService } from '../../services/servico-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  listaRepoEncontrados:{nome:string; link:string}[] = [];
  repositorios:any[] = [];
  repoNaoEncontrado:boolean = false;
  input! : FormGroup;

  constructor(private servicoApi: ServicoApiService, private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.input = this.formBuilder.group({tecnologia:['']})
    this.servicoApi.getRepositorios().subscribe({
      next:(response) => {
        this.repositorios = response;
      },
      error:(error) => {
        console.error(error)
      }
    });
  }

  pesquisarRepo():void{
    this.repoNaoEncontrado = false;
    let tecnologiaDigitada = this.input.value['tecnologia'];
    this.listaRepoEncontrados.length = 0;

    if(tecnologiaDigitada == 'c#'){
      tecnologiaDigitada = 'csharp'
    }
    if(tecnologiaDigitada == 'react'){
      tecnologiaDigitada = 'reactjs'
    }

    for(let i = 0; i < this.repositorios?.length;i++){
      const regex = new RegExp(`\\b${tecnologiaDigitada}\\b`, 'i');
      const resultado = regex.test(this.repositorios[i]["name"]);

      if(resultado){
        this.listaRepoEncontrados.push({nome:this.repositorios[i]["name"], link:this.repositorios[i]["html_url"]});
      }
    }
    if(this.listaRepoEncontrados.length == 0){
      this.repoNaoEncontrado = true;
    }
  }
}


