import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PrinterConfiguration} from "../../model/printer-configuration";
import {environment} from "../../../environments/environment";

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
    return this.httpClient.post<File[]>(environment.fileApiUrl + "/upload", formData)
  }

  getFiles(): Observable<File[]> {
    return this.httpClient.get<File[]>(environment.fileApiUrl + "/files")
  }

  deleteFile(id: string): Observable<File[]> {
    return this.httpClient.delete<File[]>(environment.fileApiUrl + "/files/" + id)
  }

  printAll() {
    this.httpClient.post(environment.fileApiUrl + "/printAll", null).subscribe()
  }

  getAvailablePrinters(): Observable<string[]> {
    return this.httpClient.get<string[]>(environment.fileApiUrl + "/printer/available-printers")
  }

  setPrinter(printerToSet: string) {
    this.httpClient.post(environment.fileApiUrl + "/printer/config/" + printerToSet, null).subscribe()
  }

  getPrinter(): Observable<PrinterConfiguration> {
    return this.httpClient.get<PrinterConfiguration>(environment.fileApiUrl + "/printer/config/")
  }
}
