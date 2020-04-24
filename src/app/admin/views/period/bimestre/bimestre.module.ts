import { NgModule } from '@angular/core';
import { BimestreCreateModule } from './bimestre-create/bimestre-create.module';
import { BimestreEditModule } from './bimestre-edit/bimestre-edit.module';
import { BimestreListModule } from './bimestre-list/bimestre-list.module';

@NgModule({
   
    imports: [
        BimestreCreateModule,
        BimestreEditModule,
        BimestreListModule,


    ]
})
export class BimestreModule { }
