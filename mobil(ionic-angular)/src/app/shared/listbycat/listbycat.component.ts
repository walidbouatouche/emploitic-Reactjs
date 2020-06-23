import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-listbycat',
  templateUrl: './listbycat.component.html',
  styleUrls: ['./listbycat.component.scss'],
})
export class ListbycatComponent implements OnInit {

  @Input() listOffres: any;

  constructor(public route: Router) {
 

  }
  jumpTo(offreId) {
 
    this.route.navigate(
      ['/offredetails'],

      {
        queryParams:
         { offreId }
      }

    );


  }
  ngOnInit() { }

}
