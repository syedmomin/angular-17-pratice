import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { PracticeComponent } from './practice/practice.component';
import { GenericFormComponent } from './generic-form/generic-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DirectiveComponent,
    DataBindingComponent,
    DecoratorComponent,
    PracticeComponent,
    GenericFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mappingField = [
    {
      label: 'Username',
      control: [
        { value: '', validation: true }
      ],
      type: 'text'
    },
    {
      label: 'Email',
      control: [
        { value: '', validation: false }
      ],
      type: 'email'
    },
    {
      label: 'Password',
      control: [
        { value: '', validation: true }
      ],
      type: 'password'
    }
  ]


}
