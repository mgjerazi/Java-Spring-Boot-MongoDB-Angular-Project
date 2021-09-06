package com.cameras.cameramanagement.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;

@Data
public class Camera {
    @Id
    private String id;
    private String name;
    private String model;
    @Indexed(direction = IndexDirection.ASCENDING)
    private int resolutionPixel;
    private String ip;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getResolutionPixel() {
        return resolutionPixel;
    }

    public void setResolutionPixel(int resolutionPixel) {
        this.resolutionPixel = resolutionPixel;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }


}

