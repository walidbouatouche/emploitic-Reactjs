import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {
  @Input() title: string;
  @Input() titleClass : string;
  constructor() { }

  ngOnInit() { }

  showModel() {
    document.getElementById(this.title).style.display = 'block'

  }

  hideModel() {
    document.getElementById(this.title).style.display = 'none'
  }

}
