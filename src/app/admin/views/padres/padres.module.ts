import { NgModule } from '@angular/core';
import { PadresCreateModule } from './padres-create/padres-create.module'
import { PadresListModule } from './padres-list/padres-list.module'
import { PadresEditModule } from './padres-edit/padres-edit.module';
import { PadresRelacionarModule } from './padres-relacionar/padres-relacionar.module';

@NgModule({
    imports: [
        PadresCreateModule,
        PadresListModule,
        PadresEditModule,
        PadresRelacionarModule
    ]
})
export class PadresModule { }
