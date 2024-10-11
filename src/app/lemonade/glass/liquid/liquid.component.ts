import { Component, Input } from '@angular/core';
import { WaveComponent } from "./wave/wave.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liquid',
  standalone: true,
  imports: [WaveComponent, NgFor],
  templateUrl: './liquid.component.html',
  styleUrl: './liquid.component.css'
})
export class LiquidComponent {
  
  @Input() percentLemonJuiceLiquid: number = 0
  @Input() percentSugarLiquid: number = 0
  @Input() numberOfIceCubesLiquid: number = 0
}
