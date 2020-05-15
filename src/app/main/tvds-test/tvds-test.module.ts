import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvdsMapComponent } from './tvds-map/tvds-map.component';
import { TvdsListComponent } from './tvds-list/tvds-list.component';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { MatButtonModule, MatIconModule, MatMenuModule, MatSelectModule, MatSidenavModule } from "@angular/material";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TvdsTestService } from './services/tvds-test.service';
// import { NgxDatatableModule } from "@swimlane/ngx-datatable";

const routes = [
  {
    path: "tvds-map",
    component: TvdsMapComponent,
    // resolve: { items: TvdsTestService }
    // canActivate: [AuthenGuardService]
  },
  {
    path: '**',
    component: TvdsListComponent,
    resolve: { items: TvdsTestService }
    // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [
    TvdsMapComponent,
    TvdsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD2aNk7BXJ13EyVfPZXWRVqEcnfzfRVVIA'
    }),

    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    DragDropModule,
    // NgxDatatableModule
  ],
  exports: [
    TvdsMapComponent,
    TvdsListComponent
  ]
})
export class TvdsTestModule { }
