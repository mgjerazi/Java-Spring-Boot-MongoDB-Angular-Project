import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Camera} from "./models";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private camerasUrl = 'http://localhost:8080/cameras';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getCameras(): Observable<Camera[]> {
    return this.http.get<Camera[]>(this.camerasUrl);
  }

  getCameraById(cameraId: string): Observable<Camera> {
    const url = `${this.camerasUrl}/${cameraId}`;
    return this.http.get<Camera>(url);
  }

  deleteCamera(cameraId: string): Observable<Camera> {
    const url = `${this.camerasUrl}/${cameraId}`;
    return this.http.delete<Camera>(url);
  }

  addCamera(camera: Camera): Observable<Camera> {
    return this.http.post<Camera>(this.camerasUrl, camera, this.httpOptions);
  }

  updateCamera(camera: Camera): Observable<Camera> {
    const url = `${this.camerasUrl}/${camera.id}`;
    return this.http.put<Camera>(url, camera, this.httpOptions);
  }

}
