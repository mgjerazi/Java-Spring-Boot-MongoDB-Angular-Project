package com.cameras.cameramanagement.repository;

import com.cameras.cameramanagement.model.Camera;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource(collectionResourceRel = "cameradata", path = "cameradata")
public interface CameraRepository extends MongoRepository<Camera, String> {


    @Query(value = "ip")
    List<Camera> findByIP(String ip);

    @Query(value = "resolutionPixel")
    List<Camera> findResolution(int resolutionPixel);


}
