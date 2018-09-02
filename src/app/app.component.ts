import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'angular-material-app';
  public myControl: any = new FormControl();
  public options: string[] = [
    'iPhone X',
    'iPhone 10',
    'iPhone 8',
    'iPhone 8 Plus',
    'iPhone 7',
    'iPhone 7 Plus',
    'iPhone 6s',
    'iPhone 6s Plus'
  ];
}
