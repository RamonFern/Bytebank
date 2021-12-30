import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'dados/models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: string;

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log("Solicitado nova transferencia");
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adiciona(valorEmitir).subscribe((result) => {
        console.log(result);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error));

  }

  limparCampos() {
    this.valor = 0;
    this.destino = "";
  }

}
