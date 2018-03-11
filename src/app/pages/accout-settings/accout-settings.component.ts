import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {


  constructor( public _ajustes: SettingsService  ) { }

  ngOnInit() {

    this.colocarCheck();
  }

  // con esta funcion hacemos que cambie el color de la aplicacion  modificando la variable
  // que esta en index.html linea 14 id="tema"
  cambiarColor ( tema: string, link: any ) {

    this.aplicarCheck( link );
    this._ajustes.aplicarTema( tema );

  }

  // con esta funcion llamamos a los selectores de la class llamados 'selector'
  // que esta en accout-settings.html
  aplicarCheck ( link: any ) {

      // tslint:disable-next-line:prefer-const
      let selectores: any = document.getElementsByClassName('selector');

      // tslint:disable-next-line:prefer-const
      for ( let ref of selectores ) {
           ref.classList.remove('working');

      }

           link.classList.add('working');
  }

  colocarCheck() {
       // tslint:disable-next-line:prefer-const
       let selectores: any = document.getElementsByClassName('selector');

        // tslint:disable-next-line:prefer-const
      let tema = this._ajustes.ajustes.tema;

       // tslint:disable-next-line:prefer-const
      for ( let ref of selectores ) {
        if (ref.getAttribute('data-theme') === tema ) {
          ref.classList.add('working');
         break;

        }
      }
  }
}
