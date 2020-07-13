import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { onlyNmbrAlph } from '../../_helpers/speed-function'

@Component({
  selector: 'app-expo-ordeplo-form',
  templateUrl: './expo-ordeplo-form.component.html',
  styleUrls: ['./expo-ordeplo-form.component.scss'],
})
export class ExpoOrdeploFormComponent implements OnInit {
  field = { title: '', content: '', location: '', start: '', end: '' }
  @Output() getField: EventEmitter<any> = new EventEmitter();
  constructor() { }
  setField() {
    this.field.title = onlyNmbrAlph(this.field.title)
    this.field.location = onlyNmbrAlph(this.field.location)
    this.field.content = onlyNmbrAlph(this.field.content)
    this.field.location = onlyNmbrAlph(this.field.location)
    this.getField.emit(this.field);
    this.field = { title: '', content: '', location: '', start: '', end: '' }
  }
  ngOnInit() { }

}
