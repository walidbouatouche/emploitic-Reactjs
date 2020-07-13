import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {
  @Input() title: string;
  @Input() id: string;
  @Input() titleClass: string;
  constructor() { }

  ngOnInit() { }

  showModel() {
    document.getElementById(this.id).style.display = 'block'

  }

  hideModel() {
    document.getElementById(this.id).style.display = 'none'
  }

}
