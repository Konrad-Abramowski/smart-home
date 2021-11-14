import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {YeelightBulb} from "../../model/yeelight-bulb";

@Injectable({
  providedIn: 'root'
})
export class YeelightBulbService {

  constructor(private httpClient: HttpClient) {
  }

  getBulbs(): Observable<YeelightBulb[]> {
    return this.httpClient.get<YeelightBulb[]>("http://localhost:5000/discover_bulbs")
  }

  toggle(ip: string) {
    return this.httpClient.get("http://localhost:5000/" + ip + "/toggle")
  }
}
