import { Component, OnInit } from '@angular/core';
import {Camera} from "../../services/models";
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../../services/backend.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-camera-form',
  templateUrl: './camera-form.component.html',
  styleUrls: ['./camera-form.component.css']
})
export class CameraFormComponent implements OnInit {
  camera:Camera = {id: "", ip: "", model: "", name: "", resolutionPixel: 0};

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCamera();
  }

  getCamera(): void {

    // lexojme id e camera-ve nga parametri i path-it
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // nese kemi id ne path (edit-camera/:id) jemi duke bere update
      this.backendService.getCameraById((id))
        .subscribe(camera => this.camera = camera);
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // Saves the data and redirects to the previous view
    if (this.camera.id) {
      // update camera
      this.backendService.updateCamera(this.camera)
        .subscribe(() => this.goBack());
    } else {
      // add new camera
      this.backendService.addCamera(this.camera).subscribe(()  => {
        console.log('camera added');
        this.goBack();
      });
    }

  }
}
