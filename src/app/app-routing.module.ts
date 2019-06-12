import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  // ivy
  // {
  //   path: 'component1',
  //   loadChildren : () => import('./component1').then(m => m.ComponentOneModule), // new dynamic import method
  // },
  // {
  //   path: 'component2',

  //   loadChildren : () => import('./component2').then(m => m.ComponentTwoModule), // new dynamic import method
  // }
  {
    path: 'component1',
    loadChildren: './component1#ComponentOneModule',
  },
  {
    path: 'component2',
    loadChildren: './component2#ComponentTwoModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
