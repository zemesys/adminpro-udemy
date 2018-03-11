// en este servicio hacemos persistentes los cambios de estilos(colores)
// en la visualizacion de la aplicacion

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };


  constructor( @Inject (DOCUMENT) private _document ) {

    this.cargarAjustes();
  }

  guardarAjustes() {
  //  console.log('guardardo en el localstore');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ) );
  }

  cargarAjustes() {

    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
    //  console.log('cargando de localstorge');

      this.aplicarTema( this.ajustes.tema );

    } else {
    //  console.log('usando valores por defecto');
      this.aplicarTema( this.ajustes.tema );
    }

   }

  aplicarTema( tema: string ) {
      // tslint:disable-next-line:prefer-const estas lineas son por que no reconoce let el tslint y da fallo
      let url = `assets/css/colors/${ tema }.css`;
      this._document.getElementById('tema').setAttribute('href', url );

      this.ajustes.tema = tema;
      this.ajustes.temaUrl = url;

      this.guardarAjustes();

  }
}

interface Ajustes {

  temaUrl: string;
  tema: string;
}
