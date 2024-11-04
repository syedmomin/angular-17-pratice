import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface FormControlConfig {
  value: string;
  validation?: boolean;
}

interface MappingField {
  label: string;
  control: Array<FormControlConfig>;
  type: string;
}

@Component({
  selector: 'myReactiveForm',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './generic-form.component.html',
})
export class GenericFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  @Input() mappingField!: MappingField[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.makeForm();
  }

  makeForm() {
    const formGroup: { [key: string]: any } = {}; // Dynamic form group object

    this.mappingField.forEach((field) => {
      field.control.forEach((control) => {
        const validators = control.validation ? [Validators.required] : []; // Add other validators as needed
        formGroup[field.label] = [control.value, validators]; // Create the form control with value and validators
      });
    });

    this.reactiveForm = this.fb.group(formGroup); // Initialize the form group with dynamic controls
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value); // Log form values on submit
    } else {
      console.log('Form is invalid'); // Handle form validation errors
    }
  }
}
