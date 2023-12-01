import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Accordion2PageRoutingModule } from './accordion2-routing.module';

import { Accordion2Page } from './accordion2.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Accordion2PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Accordion2Page]
})
export class Accordion2PageModule {}
