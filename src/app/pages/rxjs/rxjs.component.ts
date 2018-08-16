import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    /*this.observableRetry().pipe( // método pipe nos sirve para pasar los operadores de los observables
      retry(2) // operador retry - recibe cómo parámetro el no. de intentos
    ).subscribe(// Recibe 3 callbacks
      num => console.log('Subs', num), // cuando se recibe información de un next()
      error => console.log('Error en el obs', error), // cuando se recibe un error
      () => console.log('El observador terminó'), // cuando se termina el observador
    );*/

    /*this.observableMap().subscribe(// Recibe 3 callbacks
      num => console.log('Subs', num), // cuando se recibe información de un next()
      error => console.log('Error en el obs', error), // cuando se recibe un error
      () => console.log('El observador terminó'), // cuando se termina el observador
    );*/

    /*this.observableFilter().subscribe(// Recibe 3 callbacks
      num => console.log('Subs', num), // cuando se recibe información de un next()
      error => console.log('Error en el obs', error), // cuando se recibe un error
      () => console.log('El observador terminó'), // cuando se termina el observador
    );*/

    this.subscription = this.observableTest().subscribe(// Recibe 3 callbacks
      num => console.log('Subs', num), // cuando se recibe información de un next()
      error => console.log('Error en el obs', error), // cuando se recibe un error
      () => console.log('El observador terminó'), // cuando se termina el observador
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  observableRetry(): Observable<number> {
    return new Observable((observer: Subscriber<number>) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter += 1;
        observer.next(counter);
        if (counter === 3) {
          clearInterval(interval);
          observer.complete();
        }
        if (counter === 2) {
          // clearInterval(interval);
          observer.error('hubó un error...');
        }
      }, 1000);
    });
  }

  observableMap(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter += 1;
        const response = {
          value: counter
        };
        observer.next(response);
        if (counter === 3) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000);
    }).pipe(
      map(resp => resp.value)
    );
  }

  observableFilter(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter += 1;
        const response = {
          value: counter
        };
        observer.next(response);
        if (counter === 3) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000);
    }).pipe(
      map(resp => resp.value),
      filter((value, index) => { // params value = valor | index = índice que indica el llamado de filter
        return (value % 2) === 1 ? true : false; // sólo queremos números impares
      })
    );
  }

  observableTest(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter += 1;
        const response = {
          value: counter
        };
        observer.next(response);
      }, 1000);
    }).pipe(
      map(resp => resp.value),
      filter((value, index) => { // params value = valor | index = índice que indica el llamado de filter
        return (value % 2) === 1 ? true : false; // sólo queremos números impares
      })
    );
  }

}
