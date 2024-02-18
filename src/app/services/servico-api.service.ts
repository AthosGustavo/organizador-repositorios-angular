import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoApiService {

  private urlApi:string = "https://api.github.com/users/AthosGustavo/repos";

  constructor(private httpClient: HttpClient){}

  getRepositorios(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.urlApi);
  }

}
