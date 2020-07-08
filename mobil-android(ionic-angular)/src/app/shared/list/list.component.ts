import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() cat: any;

  constructor(public route: Router) {

  }
  jumpTo(idOffre) {

    this.route.navigate(
      ['/offresbycat'],

      {
        queryParams:
          { idOffre }
      }

    );


  }
  ngOnInit() { }

}
