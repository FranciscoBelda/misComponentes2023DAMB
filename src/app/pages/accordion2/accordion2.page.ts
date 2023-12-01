import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-accordion2',
  templateUrl: './accordion2.page.html',
  styleUrls: ['./accordion2.page.scss'],
})
export class Accordion2Page implements OnInit {
  @ViewChild('listenerOut', {static: true}) listenerOut!: ElementRef;
  values: string[] = ['first', 'second', 'third'];
  option: string = '';
  constructor() { }

  ngOnInit() {
  }

  accordionGroupChange(event: any) {
    const nativeEl = this.listenerOut.nativeElement;
    if(!nativeEl){
      return;
    }

    const collapsedItems = this.values
      .filter((value) => value!== event.detail.value);
     const selectedValue = event.detail.value;

     nativeEl.innerText =
       'Expanded: ' + (selectedValue=== undefined ? 'None': selectedValue )+'\n'+
         'Collapsed: '+ collapsedItems.join(', ');

  }

  optionAccordion(event: any) {
    this.option = event.detail.value;
  }
}
