import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBar2PageRoutingModule } from './search-bar2-routing.module';

import { SearchBar2Page } from './search-bar2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBar2PageRoutingModule
  ],
  declarations: [SearchBar2Page]
})
export class SearchBar2PageModule {}
