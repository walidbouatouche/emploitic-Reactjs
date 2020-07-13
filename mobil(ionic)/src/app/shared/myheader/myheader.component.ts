import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UxService } from "../../services/ux/ux.service";

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.scss'],
})
export class MyheaderComponent implements OnInit {

  class: string = "header";
  show: boolean = true;
  @Input() title: string;
  @Input() icon: string;
  @Output() menuclick: EventEmitter<any> = new EventEmitter();

  constructor(public ux: UxService) { }

  onClick() {
    this.open();
    this.menuclick.emit(true);
  }

  ngOnInit() { }

  open() {
    this.ux.openMenuController();
    this.animate();
  }
  animate() {

    this.show = false;
    setTimeout(() => {
      this.show = true;
    }, 100);
  }



}
