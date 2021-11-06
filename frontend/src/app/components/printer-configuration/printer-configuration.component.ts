import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FileService} from "../../services/file-service/file.service";

@Component({
  selector: 'app-printer-configuration',
  templateUrl: './printer-configuration.component.html',
  styleUrls: ['./printer-configuration.component.scss'],
  providers: [FileService]
})
export class PrinterConfigurationComponent implements OnInit {

  @Output() printerToSet = new EventEmitter<string>();
  availablePrinters: string[] = [];
  selectedPrinter: string;

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.getAvailablePrinters()
  }

  getAvailablePrinters() {
    this.fileService.getAvailablePrinters().subscribe(printers => {
      this.availablePrinters = printers
    })
  }

  setPrinter() {
    this.printerToSet.emit(this.selectedPrinter)
    this.fileService.setPrinter(this.selectedPrinter)
  }
}
