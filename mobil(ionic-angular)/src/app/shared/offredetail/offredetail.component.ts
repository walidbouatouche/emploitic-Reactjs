import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-offredetail',
  templateUrl: './offredetail.component.html',
  styleUrls: ['./offredetail.component.scss'],
})
export class OffredetailComponent implements OnInit {

  @Input() oneOffre: any;
  @Output() postuler: EventEmitter<any> = new EventEmitter();
  constructor() {
  
 
 
  }
  _postuler(idOffre){
    this.postuler.emit(idOffre);
  }
  ngOnInit() { 


  }

}
