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
  filesToAdd: File[] = [];
  selectedPrinter: String;

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
    this.getPrinter()
    this.updateFiles()
  }

  uploadFiles(fileList: FileList) {
    this.fileService.uploadFiles(Array.prototype.slice.call(fileList)).subscribe(files => {
      this.files = files
      this.filesToAdd = []
    })
  }

  updateFiles() {
    this.fileService.getFiles().subscribe(files => {
      this.files = files
    })
  }

  getPrinter() {
    this.fileService.getPrinter().subscribe(printer => {
      this.selectedPrinter = printer.name
    })
  }

  updateFilesToUpload(fileList: FileList) {
    this.filesToAdd = Array.from(fileList)
  }

  printAll() {
    this.fileService.printAll()
  }

  setPrinter(printerToSet: string) {
    this.selectedPrinter = printerToSet
  }

  deleteFile(fileId: string) {
    this.fileService.deleteFile(fileId).subscribe(filesAfterDelete => {
      this.files = filesAfterDelete
    })
  }
}
