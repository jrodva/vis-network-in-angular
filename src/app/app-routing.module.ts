import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CustomNodesComponent } from "./custom-nodes/custom-nodes.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'custom-nodes',
    component: CustomNodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
