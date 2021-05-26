import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Camera} from "../../services/models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-camera-item',
  templateUrl: './camera-item.component.html',
  styleUrls: ['./camera-item.component.css']
})
export class CameraItemComponent implements OnInit {

  @Input() camera: Camera = {
    id: '', name: '', ip: "", model: "", resolutionPixel: 0};

  @Output() cameraItemDelete = new EventEmitter<string>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  deleteCamera() {
    this.cameraItemDelete.emit(this.camera.id);
  }

  editCamera() {
    this.router.navigate([`camera/${this.camera.id}`]);
  }

}
