import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.scss'
})
export class IfElseComponent {
  condition: boolean = true;
  condition2: boolean = true;
}
