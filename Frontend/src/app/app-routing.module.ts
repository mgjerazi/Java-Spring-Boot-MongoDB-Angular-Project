import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamerasComponent } from './components/cameras/cameras.component';
import {CameraFormComponent} from "./components/camera-form/camera-form.component";

const routes: Routes = [
  { path: '', component: CamerasComponent },
  {path: 'camera/:id',component:CameraFormComponent},
  {path: 'camera',component:CameraFormComponent}
];

@NgModule(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
}
)
export class AppRoutingModule {}
