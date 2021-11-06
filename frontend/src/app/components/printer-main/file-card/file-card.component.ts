import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileService} from "../../../services/file-service/file.service";

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent implements OnInit {
  @Input() file
  @Output() delete: EventEmitter<string> = new EventEmitter()

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
  }

  deleteFile(id: string) {
    this.delete.emit(id)
  }




}
