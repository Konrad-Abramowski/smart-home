import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {YeelightBulb} from "../../model/yeelight-bulb";
import {rgb} from "../../model/rgb";

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
    return this.httpClient.get("http://localhost:5000/" + ip + "/toggle").subscribe()
  }

  setColor(ip: string, value: rgb) {
    this.httpClient.get("http://localhost:5000/" + ip + "/rgb", {
      params: {
        red: value.red,
        green: value.green,
        blue: value.blue,
      }
    }).subscribe()
  }

  setBrightness(ip: string, brightness: number) {
    this.httpClient.get("http://localhost:5000/" + ip, {
      params: {
        brightness: brightness
      }
    }).subscribe()
  }
}
