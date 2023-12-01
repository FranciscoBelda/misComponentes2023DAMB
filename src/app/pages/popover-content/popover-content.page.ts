import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-popover-content',
  templateUrl: './popover-content.page.html',
  styleUrls: ['./popover-content.page.scss'],
})
export class PopoverContentPage implements OnInit {
  items = Array(40);
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  onClick(valor: number) {
    this.popoverCtrl.dismiss(
      {
        item: valor,
        pepito: 'Pepito'
      }
    )
  }
}
