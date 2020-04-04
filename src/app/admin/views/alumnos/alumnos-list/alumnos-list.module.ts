import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AlumnosListComponent } from './alumnos-list.component';
import { NgModule } from '@angular/core';
import { AlumnosListRoutingModule } from './alumnos-list-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AlumnosListComponent,
    ],
    imports: [
        NgxDatatableModule,
        AlumnosListRoutingModule,
        CommonModule,
    ],
    bootstrap: [AlumnosListComponent],
    exports: [AlumnosListComponent]
})
export class AlumnosListModule { }
