import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public randomizedString:string = "";
  public randomizedStringList:string[] = [];
  
  public execRandomizer(inputString:string):string {
    const randomizedString = inputString.split('').map((char) => {
      const shouldCapitalize = Math.random() < 0.5;

      return shouldCapitalize ? char.toLocaleUpperCase() : char.toLowerCase();
    }).join('');

    this.randomizedStringList.push(randomizedString);

    return randomizedString;
  }
}
