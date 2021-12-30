import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from 'dados/models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
private url = 'http://localhost:3000/transferencias';
  private listaTransferencias!: any[];

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  adiciona(transferencia: Transferencia): Observable<Transferencia> {
    this.addData(transferencia);
    // this.listaTransferencias.push(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);

  }

  addData(transferencia: any) {
    transferencia.data = new Date();
  }

}
