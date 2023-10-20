import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './featureModule/crud/crud.component';
import { NewuserComponent } from './featureModule/newuser/newuser.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './featureModule/pipe/search.pipe';
import { NgModelComponent } from './featureModule/ng-model/ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    NewuserComponent,
    SearchPipe,
    NgModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
