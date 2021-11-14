import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RgbParserService {

  constructor() { }

  hexToRgb(valueHex: string) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(valueHex)
    return result ? {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16)
    } : null;
  }

   rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

   componentToHex(c) {
    let hex = c.toString(16)
    return hex.length == 1 ? "0" + hex : hex;
  }

}
