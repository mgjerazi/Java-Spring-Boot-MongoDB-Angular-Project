import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Camera} from "../../services/models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  cameras: Camera[] = [];
  loading: boolean = false;
  constructor(private backendService: BackendService,
              private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.backendService.getCameras()
      .subscribe( (cameras: Camera[]) => {
        this.cameras = cameras;
        this.loading = false;
      })
  }

  deleteItem(cameraId: string) {
    this.backendService.deleteCamera((cameraId))
      .subscribe(() => {
        this.cameras = this.cameras.filter((user) => user.id !== cameraId);
      })
  }

  addCamera() {
    this.router.navigate(['/camera']);
  }

}
