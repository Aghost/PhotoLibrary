import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';

const routes: Routes = [
  {path: "" ,component: PhotoGridComponent},
  {path:"photo", component:PhotoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
