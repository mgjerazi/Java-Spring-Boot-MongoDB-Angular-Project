import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamerasComponent } from './components/cameras/cameras.component';
import { HttpClientModule } from '@angular/common/http';
import { CameraItemComponent } from './components/camera-item/camera-item.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { CameraFormComponent } from './components/camera-form/camera-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CamerasComponent,
    CameraItemComponent,
    LoaderComponent,
    AddItemComponent,
    CameraFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
