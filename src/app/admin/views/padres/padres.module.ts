import { NgModule } from '@angular/core';
import { PadresCreateModule } from './padres-create/padres-create.module'
import { PadresListModule } from './padres-list/padres-list.module'
import { PadresEditModule } from './padres-edit/padres-edit.module';

@NgModule({
    imports: [
        PadresCreateModule,
        PadresListModule,
        PadresEditModule
    ]
})
export class PadresModule { }
