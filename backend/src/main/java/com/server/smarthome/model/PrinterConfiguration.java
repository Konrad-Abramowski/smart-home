package com.server.smarthome.model;

public class PrinterConfiguration {

    private String name;

    public PrinterConfiguration() {
    }

    public PrinterConfiguration(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
