package com.cameras.cameramanagement.controller;

import com.cameras.cameramanagement.model.Camera;
import com.cameras.cameramanagement.repository.CameraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class CameraController {

    @Autowired
    private CameraRepository cameraRepository;


    @GetMapping("/cameras")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Camera> getAllCameras() {
        return cameraRepository.findAll();
    }

    @DeleteMapping("/cameras/{id}")
    public void deleteById(@PathVariable("id") String id) {
        this.cameraRepository.deleteById(id);
    }


    @GetMapping("/cameras/{id}")
    public ResponseEntity<Camera> getCameraById(@PathVariable("id") String id) {
        Optional<Camera> camera = cameraRepository.findById(id);

        if (camera.isPresent()) {
            return new ResponseEntity<>(camera.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("/cameras")
    public ResponseEntity<Object> createCamera(@RequestBody Camera camera) {
        Camera savedCamera = cameraRepository.save(camera);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedCamera.getId()).toUri();
        return ResponseEntity.created(location).build();

    }

    @PutMapping("/cameras/{id}")
    public ResponseEntity<Object> updateCamera(@RequestBody Camera camera, @PathVariable String id) {
        Optional<Camera> cameraOptional = cameraRepository.findById(id);
        if (!cameraOptional.isPresent())
            return ResponseEntity.notFound().build();
        camera.setId(id);
        cameraRepository.save(camera);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{ip}")
    public List<Camera> getByIP(@PathVariable("ip") String ip) {
        List<Camera> cameras = this.cameraRepository.findByIP(ip);
        return cameras;
    }

    @GetMapping("/{resolutionPixel}")
    public List<Camera> getByResolutionPixel(@PathVariable("resolutionPixel") int resolutionPixel) {
        List<Camera> cameras = this.cameraRepository.findResolution(resolutionPixel);
        return cameras;
    }


}
