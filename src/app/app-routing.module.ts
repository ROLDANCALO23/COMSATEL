import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent } from './Tareas/list/list.component'
import {AddComponent } from './Tareas/add/add.component'
import {EditComponent } from './Tareas/edit/edit.component'




const routes: Routes = [
  {path:'list',component:ListComponent},
  {path:'add',component:AddComponent},
  {path:'edit/:id',component:EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
