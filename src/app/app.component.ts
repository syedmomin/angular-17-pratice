import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  condition: boolean = true;
  condition2: boolean = true;
  eventBindingText: string = '';

  eventBinding(event: Event) {
    const inputField = event.target as HTMLInputElement;
    this.eventBindingText = inputField.value;
  }
}
