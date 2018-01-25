import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../../core/core.module';
import { ShellComponentModule } from './../../shell/shell.module';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'requirements', pathMatch: 'full' },
  {
    path: 'requirements',
    loadChildren: 'app/building-lot/ui/expedient/requirements/requirements.module#RequirementModule'
  }  
  // {
  //   path: ':document/send-events',
  //   component: DocumentSendEventsComponent,
  //   resolve: {
  //     document: DocumentResolverService
  //   }
  // },  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ShellComponentModule,

    SharedModule,
    CoreModule,
  ],
  declarations: []
})
export class ExpedientModule { }
