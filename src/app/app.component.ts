import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  centered:boolean = true;

  constructor(private clipboard: Clipboard) {

  }

  public randomizedString:string = "";
  public randomizedStringList:string[] = [];
  
  public execRandomizer(inputString:string):string {
   
    const randomizedString = inputString.split('').map((char) => {
      const shouldCapitalize = Math.random() < 0.5;

      return shouldCapitalize ? char.toLocaleUpperCase() : char.toLowerCase();
    }).join('');

    this.randomizedStringList.push(randomizedString);
    this.randomizedString = "";

    return this.randomizedString;
  }

  public updateButtonState() {
    if(this.randomizedString === null || this.randomizedString === undefined) {
      return false;
    } else {
      return true;
    }
  }

  public copyToClipboard(goober: string) {
    this.clipboard.copy(goober);
  }
}
