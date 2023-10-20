import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './featureModule/crud/crud.component';
import { NewuserComponent } from './featureModule/newuser/newuser.component';
import { NgModelComponent } from './featureModule/ng-model/ng-model.component';

const routes: Routes = [
  {path:'crud',component:CrudComponent},
  {path:'adduser',component:NewuserComponent},
  {path:'ngmodel',component:NgModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
