import {Component, Input, OnInit} from '@angular/core';
import {YeelightBulb} from "../../../model/yeelight-bulb";
import {RgbParserService} from "../../../services/rgb-parser/rgb-parser.service";
import {YeelightBulbService} from "../../../services/yeelight-bulb-service/yeelight-bulb.service";

@Component({
  selector: 'app-yeelight-bulb-card',
  templateUrl: './yeelight-bulb-card.component.html',
  styleUrls: ['./yeelight-bulb-card.component.scss']
})
export class YeelightBulbCardComponent implements OnInit {
  @Input() yeelightBulb: YeelightBulb
  color: string
  power: boolean = false
  brightness: number
  name: string = ''

  isNameEditDisabled: boolean = true

  constructor(private rgbParserService: RgbParserService,
              private yeelightBulbService: YeelightBulbService) { }

  ngOnInit(): void {
    this.color = this.rgbParserService.decimalToHex(this.yeelightBulb.capabilities.rgb)
    this.power = this.yeelightBulb.capabilities.power == "on"
    this.brightness = parseInt(this.yeelightBulb.capabilities.bright)
    if (this.yeelightBulb.capabilities.name.length == 0) {
      this.isNameEditDisabled = false
    }
  }

  setColor() {
    this.yeelightBulbService.setColor(this.yeelightBulb.ip, this.rgbParserService.hexToRgb(this.color))
    this.brightness = parseInt(this.yeelightBulb.capabilities.bright)
  }

  toggle() {
    this.yeelightBulbService.toggle(this.yeelightBulb.ip)
  }

  setBrightness() {
    this.yeelightBulbService.setBrightness(this.yeelightBulb.ip, this.brightness)
  }

  setName() {
    this.isNameEditDisabled = false
  }
}
