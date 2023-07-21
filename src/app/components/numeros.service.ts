import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {
  
  private observableNumerico$ = new Observable<number[]>((suscriber) => {
    suscriber.next([1,2,3,4,5,6,7,8,9,10]);
  }).pipe(
    map(val => {
      let retorno : number[] = [];
      val.forEach(
        (x) => retorno.push(x * 2)
      );
      return retorno;
    })
  );

  getObservableNumerico() : Observable<number[]>{
    return this.observableNumerico$
  }
  
}
