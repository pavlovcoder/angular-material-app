import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  public autoCompleteAlbum: any = new FormControl();
  public albumNames: string[] = [
   'Daft Punk - "Homework" - 20 January 1997 year',
   'Daft Punk - "Discovery" - 9 March 1991 year',
   'Daft Punk - "Human after all" - 14 March 2005 year',
   'Daft Punk - "Random Access Memories" - 17 May 2013 year',
   'Daft Punk - "Overnight" - 5 September 2017 year'
  ];

  constructor() { }

  ngOnInit() {
  }

}
