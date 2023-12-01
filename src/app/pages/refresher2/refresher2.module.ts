import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Refresher2PageRoutingModule } from './refresher2-routing.module';

import { Refresher2Page } from './refresher2.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Refresher2PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Refresher2Page]
})
export class Refresher2PageModule {}
