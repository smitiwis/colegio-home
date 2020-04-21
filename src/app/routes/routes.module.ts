import { AdminComponent } from './../admin/admin.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        loadChildren: '../landing/views/home/home.module#HomeModule',
      },
      {
        path: 'login',
        loadChildren: '../landing/views/preintranet/preintranet.module#PreintranetModule',
      },
      {
        path: 'contacto',
        loadChildren: '../landing/views/contacto/contacto.module#ContactoModule',
      },
      {
        path: 'nosotros',
        loadChildren: '../landing/views/nosotros/nosotros.module#NosotrosModule',
  
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'periodos',
        loadChildren: '../admin/views/period/period.module#PeriodModule'
      },
      {
        path: 'periodos/list',
        loadChildren: '../admin/views/period/period-list/period-list.module#PeriodListModule',
      },
      {
        path: 'periodos/crear',
        loadChildren: '../admin/views/period/period-create/period-create.module#PeriodCreateModule'
      },
      {
        // path: 'periodos/editar/:id',
        path: 'periodos/editar',
        loadChildren: '../admin/views/period/period-edit/period-edit.module#PeriodEditModule',
        pathMatch: 'prefix'
      },
      //RUTAS - ALUMNOS
      {
        path: 'alumno',
        loadChildren: '../admin/views/alumnos/alumnos.module#AlumnosModule'
      },
      {
        path: 'alumno/crear',
        loadChildren: '../admin/views/alumnos/alumnos-create/alumnos-create.module#AlumnosCreateModule'
      },
      {
        path: 'alumno/list',
        loadChildren: '../admin/views/alumnos/alumnos-list/alumnos-list.module#AlumnosListModule',
      },
      {
        // path: 'alumno/editar/:id',
        path: 'alumno/editar',
        loadChildren: '../admin/views/alumnos/alumnos-edit/alumnos-edit.module#AlumnosEditModule',
        pathMatch: 'prefix'
      },

      // RUTAS DOCENTES
      {
        path: 'docente',
        loadChildren: '../admin/views/docentes/docentes.module#DocentesModule'
      },
      {
        path: 'docente/crear',
        loadChildren: '../admin/views/docentes/docentes-create/docentes-create.module#DocentesCreateModule'
      },
      {
        path: 'docente/list',
        loadChildren: '../admin/views/docentes/docentes-list/docentes-list.module#DocentesListModule',
      },
      {
        // path: 'docente/editar/:id',
        path: 'docente/editar',
        loadChildren: '../admin/views/docentes/docentes-edit/docentes-edit.module#DocentesEditModule',
        pathMatch: 'prefix'
      },

      


      // RUTAS DOCENTES
      {
        path: 'padre',
        loadChildren: '../admin/views/padres/padres.module#PadresModule'
      },
      {
        path: 'padre/crear',
        loadChildren: '../admin/views/padres/padres-create/padres-create.module#PadresCreateModule'
      },
      {
        path: 'padre/list',
        loadChildren: '../admin/views/padres/padres-list/padres-list.module#PadresListModule',
      },
      {
        // path: 'padre/editar/:id',
        path: 'padre/editar',
        loadChildren: '../admin/views/padres/padres-edit/padres-edit.module#PadresEditModule',
        pathMatch: 'prefix'
      },

      //RUTAS DE PAGOS
        {
          path: 'pago',
          loadChildren:'../admin/views/pagos/pago.module#PagoModule'
        },
        {
          path:'pago/registrar',
        loadChildren: '../admin/views/pagos/pago-registrar/pago-registrar.module#PagoRegistrarModule'
          
        }




    ],
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {
        paramsInheritanceStrategy: 'always'
      })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
