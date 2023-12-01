import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher2',
  templateUrl: './refresher2.page.html',
  styleUrls: ['./refresher2.page.scss'],
})
export class Refresher2Page implements OnInit {
  items: any[] = [];
  skeleton = false;

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event: any){
    setTimeout(() => {
      this.items.push(...Array(10));
      this.skeleton = true;
      event.target.complete();
    },1500);
    this.skeleton= false;
  }

}
