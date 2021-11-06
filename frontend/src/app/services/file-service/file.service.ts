import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PrinterConfiguration} from "../../model/printer-configuration";

@Injectable({
  providedIn: 'root'
})
export class FileService {


  constructor(private httpClient: HttpClient) {
  }

  uploadFiles(files: File[]): Observable<File[]> {
    const formData = new FormData();
    files.forEach(file => {
      formData.append("file", file);
    })
    return this.httpClient.post<File[]>("http://localhost:8080/upload", formData)
  }

  getFiles(): Observable<File[]> {
    return this.httpClient.get<File[]>("http://localhost:8080/files")
  }

  deleteFile(id: string): Observable<File[]> {
    return this.httpClient.delete<File[]>("http://localhost:8080/files/" + id)
  }

  printAll() {
    this.httpClient.post("http://localhost:8080/printAll", null).subscribe()
  }

  getAvailablePrinters(): Observable<string[]> {
    return this.httpClient.get<string[]>("http://localhost:8080/printer/available-printers")
  }

  setPrinter(printerToSet: string) {
    this.httpClient.post("http://localhost:8080/printer/config/" + printerToSet, null).subscribe()
  }

  getPrinter(): Observable<PrinterConfiguration> {
    return this.httpClient.get<PrinterConfiguration>("http://localhost:8080/printer/config/")
  }
}
