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
        path: 'intranet',
        loadChildren: '../landing/views/intranet/intranet.module#IntranetModule',
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'periodos',
        loadChildren: '../admin/views/period/period-list/period-list.module#PeriodListModule',
      },
      {
        path: 'periodos/crear',
        loadChildren: '../admin/views/period/period-create/period-create.module#PeriodCreateModule'
      },
      {
        path: 'periodos/editar/:id',
        loadChildren: '../admin/views/period/period-create/period-create.module#PeriodCreateModule',
        pathMatch: 'prefix'
      },
      {
        path: 'alumnos',
        loadChildren: '../admin/views/period/period.module#PeriodModule'
      },
    ],

  }
  // {
  //   path: 'admin',
  //   component: ,

  // },
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
