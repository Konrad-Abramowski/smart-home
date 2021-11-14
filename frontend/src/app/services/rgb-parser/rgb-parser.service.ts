import {Injectable} from '@angular/core';
import {rgb} from "../../model/rgb";

@Injectable({
  providedIn: 'root'
})
export class RgbParserService {

  constructor() {
  }

  hexToRgb(valueHex: string): rgb {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(valueHex)
    let resultRGB: rgb = {
      red: parseInt(result[1], 16).toString(),
      green: parseInt(result[2], 16).toString(),
      blue: parseInt(result[3], 16).toString()
    }
    return result ? resultRGB : null;
  }

  decimalToHex(value: string): string {
    let hexValue: string = parseInt(value).toString(16)
    let result: string = this.padLeft(hexValue, '0', 6)

    return "#" + result
  }

  padLeft(text: string, padChar: string, size: number): string {
    return (String(padChar).repeat(size) + text).substr((size * -1), size);
  }
}
