import { Component, OnInit } from '@angular/core';
import {FileService} from "../../services/file-service/file.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [FileService]
})
export class MainComponent implements OnInit {
  files: File[];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  uploadFiles(files: File[]) {
    this.fileService.uploadFiles(files)
  }
}
