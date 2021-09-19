import {Component, OnInit} from '@angular/core';
import {FileService} from "../../services/file-service/file.service";

@Component({
  selector: 'app-printer-main',
  templateUrl: './printer-main.component.html',
  styleUrls: ['./printer-main.component.scss'],
  providers: [FileService]
})
export class PrinterMainComponent implements OnInit {

  files: File[] = [];
  filesToAdd: File[] = []

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
    this.updateFiles()
  }

  uploadFiles(fileList: FileList) {
    this.fileService.uploadFiles(Array.prototype.slice.call(fileList))
    this.updateFiles()
  }

  updateFiles() {
    this.fileService.getFiles().subscribe(files => {
      this.files = files
    })
  }

  updateFilesToUpload(fileList: FileList) {
    this.filesToAdd = Array.from(fileList)
  }

}
