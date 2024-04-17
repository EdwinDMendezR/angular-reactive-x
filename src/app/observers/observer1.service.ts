import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class Observer1Service {


  
  constructor() { }



  subscribeCaso1() {
    const obs$ = new Observable<string>(subscriber => {
      subscriber.next('Caso 1');
      subscriber.next('Caso 2');
      subscriber.next('Caso 3');
      subscriber.next('Caso 4');
      subscriber.next('Caso 5');
      subscriber.complete();
      subscriber.next('Caso 6');
      subscriber.next('Caso 7');
      subscriber.next('Caso 8');
      subscriber.next('Caso 9');
      subscriber.next('Caso 10');
    }
  );
  obs$.subscribe(respuesta => { console.log });
}

}
