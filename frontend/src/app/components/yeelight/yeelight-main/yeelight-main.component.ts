import { Component, OnInit } from '@angular/core';
import {YeelightBulbService} from "../../../services/yeelight-bulb-service/yeelight-bulb.service";
import {YeelightBulb} from "../../../model/yeelight-bulb";

@Component({
  selector: 'app-yeelight-main',
  templateUrl: './yeelight-main.component.html',
  styleUrls: ['./yeelight-main.component.scss'],
  providers: [YeelightBulbService]
})
export class YeelightMainComponent implements OnInit {

  bulbs: YeelightBulb[] = []
  cos: any

  constructor(private yeelightLedBulbService: YeelightBulbService) {
  }

  ngOnInit(): void {
  }

  zajonc() {
    this.yeelightLedBulbService.getBulbs().subscribe(bulbs => {
      this.bulbs = bulbs
      console.log(bulbs)
    })
  }

  toggle() {
    this.yeelightLedBulbService.toggle("192.168.0.66").subscribe()
  }

  setColor() {
  }


}
