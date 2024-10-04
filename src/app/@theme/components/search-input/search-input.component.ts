import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-input',
  styleUrls: ['./search-input.component.scss'],
  standalone: true,
  template: `
  <i class="pi pi-search" (click)="showInput()"  style="font-size: 1.5rem"></i>

  
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
})
export class SearchInputComponent {
  @ViewChild('input', { static: true }) input: ElementRef;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  isInputShown = false;

  showInput() {
    this.isInputShown = true;
    this.input.nativeElement.focus();
  }

  hideInput() {
    this.isInputShown = false;
  }

  onInput(val: string) {
    this.search.emit(val);
  }
}
