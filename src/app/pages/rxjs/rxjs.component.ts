import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;

  constructor() {

    this.subcription = this.regresaObservable()
      .subscribe(
           numero =>  console.log( 'subs', numero ),
           error => console.error( 'error en el obs!', error ),
           () =>  console.log( 'el observador Termino' )
    );

  }


  ngOnInit() {

  }

  // aqui paramos  todas las funciones de la pagina esta
  ngOnDestroy() {
      this.subcription.unsubscribe();
  //  console.log('la pagina se va a cerrar');

  }

  regresaObservable(): Observable<any> {
     // tslint:disable-next-line:prefer-const
     return new Observable( observer => {

      // tslint:disable-next-line:prefer-const
      let contador = 0;

      // tslint:disable-next-line:prefer-const
      let intervalo = setInterval( () => {

        contador += 1;

        // tslint:disable-next-line:prefer-const
        let salida = {
           valor: contador
        };

        observer.next( salida );

        // if ( contador === 3 ) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }

        // if ( contador === 2 ) {
        //   clearInterval( intervalo );
        //   observer.error('auxilo!');
        // }


      }, 500 );

    })
    .retry(2)
    .map( (resp: any) => {

      return resp.valor ;

    })
     // aqui se muestra solo los valores impares en la consola
    .filter( (valor, index) => {

    //  console.log('Filter', valor, index);

    if ( (valor % 2) === 1 ) {
         // impar
        return true;
    } else {
      // par
       return false;
    }


    });

  }

}
