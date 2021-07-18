import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
  {path: 'add', component:AddComponent},
  {path: 'write', component: WriteComponent},
  {path: 'add/:id', component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
