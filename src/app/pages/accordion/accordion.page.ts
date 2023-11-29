import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage implements OnInit {

  @ViewChild('listenedOut', {static: true})listenerOut!: ElementRef;
  values: string[] = ['first', 'second', 'third'];
  option: string = '';
  constructor() { }

  ngOnInit() {
  }
  accordionGroupChange= (ev: any) => {
    const nativeEl = this.listenerOut.nativeElement;
    if(!nativeEl){
      return;
    }
    const collapsedItems = this.values.filter(
      (value) => value !== ev.detail.value
    );
    const selectedValue = ev.detail.value;

    nativeEl.innerText =
      `Expanded: ${selectedValue === undefined? 'None':ev.detail.value}
      Collapsed: ${collapsedItems.join(', ')}`;
  }

  optionAccordion(ev: any){
    this.option = ev.detail.value;
  }


}
