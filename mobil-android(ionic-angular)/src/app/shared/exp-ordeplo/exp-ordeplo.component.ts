import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exp-ordeplo',
  templateUrl: './exp-ordeplo.component.html',
  styleUrls: ['./exp-ordeplo.component.scss'],
})


export class ExpOrdeploComponent implements OnInit {
  @Input() expDeplo: any;
  @Input() index: any;
  @Output() getIndex: EventEmitter<any> = new EventEmitter();
  
  setIndex() {
    this.getIndex.emit(this.index);
  }
  constructor() { }

  ngOnInit() {

  }

}
