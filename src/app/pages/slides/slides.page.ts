import { Component, OnInit } from '@angular/core';
import {Swiper} from "swiper";

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
slides: {img: string; titulo: string; desc: string}[] = [
  {
    img: '/assets/images/placeholder.png',
    titulo: 'Comparte Fotos',
    desc: 'Mira y comparte imágenes por todo el mundo'
  },
  {
    img: '/assets/images/calendar.png',
    titulo: 'Calendario',
    desc: 'Nunca te olvides que día es!'
  },
  {
    img: '/assets/images/music.png',
    titulo: 'Comparte tu música',
    desc: 'Toda la música a tu alcance'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
