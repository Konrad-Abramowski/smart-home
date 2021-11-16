import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {YeelightBulb} from "../../model/yeelight-bulb";
import {rgb} from "../../model/rgb";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class YeelightBulbService {

  constructor(private httpClient: HttpClient) {
  }

  getBulbs(): Observable<YeelightBulb[]> {
    return this.httpClient.get<YeelightBulb[]>(environment.yeelightApiUrl + "/discover_bulbs")
  }

  toggle(ip: string) {
    return this.httpClient.get(environment.yeelightApiUrl + "/" + ip + "/toggle").subscribe()
  }

  setColor(ip: string, value: rgb) {
    this.httpClient.get(environment.yeelightApiUrl + "/" + ip + "/rgb", {
      params: {
        red: value.red,
        green: value.green,
        blue: value.blue,
      }
    }).subscribe()
  }

  setBrightness(ip: string, brightness: number) {
    this.httpClient.get(environment.yeelightApiUrl + "/" + ip, {
      params: {
        brightness: brightness
      }
    }).subscribe()
  }

  setName(ip: string, name: string) {
    return this.httpClient.get(environment.yeelightApiUrl + "/" + ip, {
      params: {
        name: name
      }
    })
  }
}
