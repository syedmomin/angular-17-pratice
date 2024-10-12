import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decorator',
  standalone: true,
  imports: [],
  templateUrl: './decorator.component.html',
})
export class DecoratorComponent {
  @Input({ alias: 'nameAtr', required: true }) nameText: string = 'Momin';
}
