import {Component, OnInit} from '@angular/core';
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

  constructor(private yeelightLedBulbService: YeelightBulbService) {
  }

  ngOnInit(): void {
    this.yeelightLedBulbService.getBulbs().subscribe(bulbs => {
      this.bulbs = bulbs
    })
  }
}
