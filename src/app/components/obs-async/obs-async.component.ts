import { Component, OnInit } from '@angular/core';
import { NumerosService } from '../numeros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs-async',
  templateUrl: './obs-async.component.html',
  styleUrls: ['./obs-async.component.css']
})

export class ObsAsyncComponent {

  observableNumerico : Observable<number[]>;
  
  constructor(private numerosService:NumerosService){
    this.observableNumerico = numerosService.getObservableNumerico();
  }

}
