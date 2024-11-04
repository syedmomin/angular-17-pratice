import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [],
  templateUrl: './practice.component.html',
})
export class PracticeComponent implements AfterViewInit{
  @ViewChild('headingOne') headingOne!: ElementRef;

  constructor(private render : Renderer2) { }

  ngAfterViewInit() {
    this.render.setStyle(this.headingOne.nativeElement,'color','orange') 
  }
}
