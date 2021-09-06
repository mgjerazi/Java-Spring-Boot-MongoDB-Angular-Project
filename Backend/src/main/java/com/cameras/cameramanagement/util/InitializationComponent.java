package com.cameras.cameramanagement.util;

import com.cameras.cameramanagement.model.Camera;
import com.cameras.cameramanagement.repository.CameraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;


@Component
public class InitializationComponent {

    @Autowired
    private CameraRepository cameraRepository;


    @PostConstruct
    private void start() {

        cameraRepository.deleteAll();

        Camera camera1 = new Camera();
        camera1.setName("camera1");
        camera1.setModel("Hik-Vision");
        camera1.setResolutionPixel(1000);
        camera1.setIp("192.168.1.11");

        Camera camera2 = new Camera();
        camera2.setName("camera2");
        camera2.setModel("sony");
        camera2.setResolutionPixel(2000);
        camera2.setIp("192.168.1.12");

        Camera camera3 = new Camera();
        camera3.setName("camera3");
        camera3.setModel("canon");
        camera3.setResolutionPixel(3000);
        camera3.setIp("192.168.1.13");

        Camera camera4 = new Camera();
        camera4.setName("camera4");
        camera4.setModel("nikon");
        camera4.setResolutionPixel(4000);
        camera4.setIp("192.168.1.14");

        Camera camera5 = new Camera();
        camera5.setName("camera5");
        camera5.setModel("samsung");
        camera5.setResolutionPixel(5000);
        camera5.setIp("192.168.1.15");


        //drop all cameras
        this.cameraRepository.deleteAll();

        //add our cameras to the database
        List<Camera> cameras = Arrays.asList(camera1, camera2, camera3, camera4, camera5);
        this.cameraRepository.saveAll(cameras);
    }


}

