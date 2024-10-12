import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  eventBindingText: string = '';
  modalBindingText: string = '';

  eventBinding(event: Event) {
    const inputField = event.target as HTMLInputElement;
    this.eventBindingText = inputField.value;
  }
}
