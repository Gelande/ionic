import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String = "Resultado";

  calcular() {

    if(this.alcool && this.gasolina) {

      let precoAlcool = parseFloat(this.alcool);
      let precoGas = parseFloat(this.gasolina);

      let result = precoAlcool / precoGas

      if(result >= 0.7) {

        this.resultado = "Melhor usar gasolina."
      }else {
        this.resultado = "Melhor usar álcool."
      }

    }else {
      this.resultado = "Preencha os campos corretamente!"
    }
  }

  constructor() {}

}
