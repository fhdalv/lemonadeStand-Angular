import { Component, Input } from '@angular/core';
import { LiquidComponent } from "./liquid/liquid.component";

@Component({
  selector: 'app-glass',
  standalone: true,
  imports: [LiquidComponent],
  templateUrl: './glass.component.html',
  styleUrl: './glass.component.css'
})
export class GlassComponent {

  @Input() percentLemonJuice: number = 0
  @Input() percentSugar: number = 0
  @Input() numberOfIceCubes: number = 0

  @Input() classNames: string = '';
}
