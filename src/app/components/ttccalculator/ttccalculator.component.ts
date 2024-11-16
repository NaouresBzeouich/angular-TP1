import { Component } from '@angular/core';

@Component({
  selector: 'app-ttccalculator',
  templateUrl: './ttccalculator.component.html',
  styleUrl: './ttccalculator.component.css'
})
export class TTCCalculatorComponent {
  quantite = 1;
  prixUnitaireHT = 0;
  tva = 18;
  prixunitaireTTC = this.prixUnitaireHT *(100+ this.tva) / 100 ;
  prixTotalTTC = this.prixunitaireTTC * this.quantite;

  discount20 = 0.2;
  discount30 = 0.3;

  discount = 0;

  ngOnInit(): void {
    this.calculerTTC();
  }

  calculerTTC() {

    this.prixunitaireTTC = this.prixUnitaireHT + this.tva;
    this.prixTotalTTC = this.prixunitaireTTC * this.quantite;

    if ((this.quantite > 10) && (this.quantite < 15)) {
      this.discount = this.prixTotalTTC * this.discount20;
    }
    else{
      if (this.quantite > 10) {
        this.discount = this.prixTotalTTC * this.discount30;
      }
      else{
        this.discount = 0 ;
      }
    }


  }
}
