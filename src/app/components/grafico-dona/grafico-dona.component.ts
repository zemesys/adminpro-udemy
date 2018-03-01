import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') public doughnutChartLabels: string[] = [];
  @Input('chartData') public doughnutChartData: number[] = [];
  @Input('chartType') public doughnutChartType: string = '';



  constructor() {

   }

  ngOnInit() {

  }

  cambiarValor( valor1: '' ) {



 }

 cambiarValor2( valor2: '' ) {



}


}
