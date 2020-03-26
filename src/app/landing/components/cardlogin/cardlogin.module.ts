import { NgModule } from '@angular/core';

import { CardloginComponent } from './cardlogin.component';
import { CommonModule } from '@angular/common';
import { CardModalComponent } from './card-modal/card-modal.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardloginComponent,
    CardModalComponent,
    CardContainerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  exports: [CardloginComponent],
})
export class CardloginModule { }
