package com.server.smarthome.controller;


import com.server.smarthome.model.File;
import com.server.smarthome.model.PrinterConfiguration;
import com.server.smarthome.model.ResponseFile;
import com.server.smarthome.service.FileServiceImpl;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.printing.PDFPageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.print.PrintService;
import javax.print.PrintServiceLookup;
import java.awt.print.PrinterException;
import java.awt.print.PrinterJob;
import java.io.IOException;
import java.net.URL;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
public class FileController {

    private FileServiceImpl fileService;
    private String selectedPrinter;

    public FileController(final FileServiceImpl fileService) {
        this.fileService = fileService;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFiles(@RequestParam("file") MultipartFile[] files) {
        try {
            for (MultipartFile file : files) {
                fileService.store(file);
            }

            return ResponseEntity.status(HttpStatus.OK).
                    body(fileService.getAllFilesAsResponseFileList());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).
                    body("Uploading file failed");
        }
    }

    @GetMapping("/files")
    public ResponseEntity<List<ResponseFile>> getListFiles() {
        return ResponseEntity.status(HttpStatus.OK).
                body(fileService.getAllFilesAsResponseFileList());
    }

    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        File file = fileService.getFile(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
                .body(file.getData());
    }

    @DeleteMapping("files/{id}")
    public ResponseEntity deleteFile(@PathVariable String id) {
        boolean result = fileService.deleteFileById(id);
        if (result) {
            return ResponseEntity.status(HttpStatus.OK).
                    body(fileService.getAllFilesAsResponseFileList());
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/printer/available-printers")
    public ResponseEntity<List<String>> getPrinters() {
        return new ResponseEntity<>(Arrays.stream(PrintServiceLookup.lookupPrintServices(null, null))
                .map(PrintService::getName).collect(Collectors.toList()), HttpStatus.OK);

    }

    @PostMapping("/printer/config/{selectedPrinter}")
    public ResponseEntity<String> configurePrinter(@PathVariable String selectedPrinter) {
        this.selectedPrinter = selectedPrinter;
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/printer/config")
    public ResponseEntity<PrinterConfiguration> getPrinter() {
        return new ResponseEntity<>(new PrinterConfiguration(this.selectedPrinter), HttpStatus.OK);
    }

    @PostMapping("/printAll")
    public ResponseEntity printAllFiles() {
        List<ResponseFile> files = fileService.getAllFiles().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/files/")
                    .path(dbFile.getId())
                    .toUriString();

            return new ResponseFile(
                    dbFile.getId(),
                    dbFile.getName(),
                    fileDownloadUri,
                    dbFile.getType(),
                    dbFile.getData().length);
        }).collect(Collectors.toList());

        try {
            PrintService myPrintService = fileService.findPrintService(selectedPrinter);

            for (int i = 0; i < files.size(); i++) {
                URL url = new URL(files.get(i).getUrl());
                System.out.println(url);
                java.io.File file = new java.io.File("file" + i + ".pdf");
                org.apache.commons.io.FileUtils.copyURLToFile(url, file);
                PDDocument document = PDDocument.load(file);
                PrinterJob job = PrinterJob.getPrinterJob();
                job.setPageable(new PDFPageable(document));
                job.setPrintService(myPrintService);
                job.print();
                document.close();
            }

        } catch (IOException | PrinterException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}