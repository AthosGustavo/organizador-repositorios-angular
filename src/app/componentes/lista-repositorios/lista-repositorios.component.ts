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

}
