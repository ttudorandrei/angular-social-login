import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDemoComponent } from './app-demo/app-demo.component';

const routes: Routes = [
  {path: 'login', component:AppDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
