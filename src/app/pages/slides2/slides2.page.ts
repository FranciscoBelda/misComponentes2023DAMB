import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-slides2',
  templateUrl: './slides2.page.html',
  styleUrls: ['./slides2.page.scss'],
})
export class Slides2Page implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

  swiperClick(event: MouseEvent,a: string) {
    this.toastService.cargarToast(a,1500,'success');
  }
}
