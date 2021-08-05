package com.server.smarthome.service;

import java.io.IOException;
import java.util.stream.Stream;

import com.server.smarthome.model.File;
import com.server.smarthome.repository.FileRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.print.PrintService;
import javax.print.PrintServiceLookup;

@Service
public class FileServiceImpl implements FileService {

    private FileRepository fileRepository;

    public FileServiceImpl(final FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    public File store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        File toStore = new File(fileName, file.getContentType(), file.getBytes());
        return fileRepository.save(toStore);
    }

    public File getFile(String id) {
        return fileRepository.findById(id).get();
    }

    public Stream<File> getAllFiles() {
        return fileRepository.findAll().stream();
    }

    public PrintService findPrintService(String printerName) {
        PrintService[] printServices = PrintServiceLookup.lookupPrintServices(null, null);
        for (PrintService printService : printServices) {
            if (printService.getName().trim().equals(printerName)) {
                return printService;
            }
        }
        return null;
    }
    public boolean deleteFileById(String id){
        if(fileRepository.existsById(id)){
            File file = new File();
            fileRepository.deleteById(id);
            return true;
        } else{
            return false;
        }
    }
}

