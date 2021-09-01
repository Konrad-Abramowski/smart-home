import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {


  constructor(private httpClient: HttpClient) {
  }

  uploadFiles(files: FileList) {
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append("file", file);
    })
    const upload$ = this.httpClient.post("http://localhost:8080/upload", formData);
    upload$.subscribe();
  }

  getFiles(): Observable<File[]> {
    return this.httpClient.get<File[]>("http://localhost:8080/files")
  }
}
