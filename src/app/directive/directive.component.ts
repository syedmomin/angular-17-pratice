import { Component, OnInit } from '@angular/core';
import { dummyData } from '../dummy-data';

interface Employee {
  id: number;
  name: string;
  age: number;
  salary: number;
  description: string;
}

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [],
  templateUrl: './directive.component.html',
})
export class DirectiveComponent implements OnInit {
  condition: boolean = true;
  condition2: boolean = true;
  employees: Employee[] = [];

  ngOnInit(): void {
    this.employees = dummyData;
  }

}
