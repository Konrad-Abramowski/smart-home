import {Component, Input, OnInit} from '@angular/core';
import {FileService} from "../../../services/file-service/file.service";

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent implements OnInit {
  @Input() file

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
  }

  deleteFile(id: string) {
    this.fileService.deleteFile(id)
  }
}
