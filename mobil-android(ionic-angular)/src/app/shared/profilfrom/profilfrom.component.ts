import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service'
import userInfo from '../../_helpers/userifos/login-infos'
@Component({
  selector: 'app-profilfrom',
  templateUrl: './profilfrom.component.html',
  styleUrls: ['./profilfrom.component.scss'],
})
export class ProfilfromComponent implements OnInit {
  @Output() getDataForm: EventEmitter<any> = new EventEmitter();
  @Output() upPdfCv: EventEmitter<any> = new EventEmitter();
  userInfo: any;
  validation_form: FormGroup;  //https://angular.io/guide/form-validation
  _add_product: any;
  validation_messages = {
    nom: [
      { type: "required", message: "required" },
      {
        type: "minlength",
        message: " min:5"
      }, {
        type: "maxlength",
        message: " max:20 "
      }

    ],
    prenom: [
      { type: "required", message: "required." },
      {
        type: "minlength",
        message: " min:5"
      }, {
        type: "maxlength",
        message: " max:20 "
      },
    ],
    phone: [
      { type: "required", message: "required." },
      {
        type: "minlength",
        message: " min:5"
      }, {
        type: "maxlength",
        message: " max:20 "
      },
      {

        type: "pattern", message: " Number"
      }
    ],
    adresse: [
      { type: "required", message: "required." },
      {
        type: "minlength",
        message: " min:10"
      }, {
        type: "maxlength",
        message: " max:50 "
      }

    ],
    experience: [
      { type: "required", message: "required." },
      {
        type: "minlength",
        message: " min:10"
      }, {
        type: "maxlength",
        message: " max:200 "
      }

    ],
    deplom: [
      { type: "required", message: "required." },
      {
        type: "minlength",
        message: " min:10"
      }, {
        type: "maxlength",
        message: " max:200 "
      }

    ]

  }

  constructor(public authService: AuthService, public formbuilder: FormBuilder) {
    this.authService.getUserByid(userInfo.getUserId()).then(({ data }) => {
      this.userInfo = data[0]
      console.log(this.userInfo)
      const numericNumberReg = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
      this.validation_form = this.formbuilder.group({
        nom: new FormControl(this.userInfo.nom,
          Validators.compose([
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(5)

          ]
          )
        ),
        phone: new FormControl(this.userInfo.phone,
          Validators.compose([
            Validators.required,
            Validators.pattern(numericNumberReg),
            Validators.maxLength(20),
            Validators.minLength(5)

          ]
          )),
        prenom: new FormControl(this.userInfo.prenom,
          Validators.compose([
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(5)

          ]
          )),
        adresse: new FormControl(this.userInfo.adresse,
          Validators.compose([
            Validators.required,
            Validators.maxLength(50),
            Validators.minLength(5)

          ]
          )),
        experience: new FormControl(this.userInfo._exp,
          Validators.compose([
            // Validators.required,
            // Validators.maxLength(200),
            // Validators.minLength(5)

          ]
          ))
        ,
        deplom: new FormControl(this.userInfo._deplo,
          Validators.compose([
            // Validators.required,
            // Validators.maxLength(200),
            // Validators.minLength(5)

          ]
          ))

      })


    })




  }
  getDataFromForm(action: any): void {

    this.getDataForm.emit({ ...action, info: this.userInfo.info, 'cat': 0, userId: userInfo.getUserId() })


  }

  updateCv(e) {
    const formData = new FormData(); // userid + file

    formData.append('pdf', e.target.files[0]) // get file from input
    formData.append('userId', userInfo.getUserId())  // get use id 
    this.upPdfCv.emit(formData)


  }

  ngOnInit() {


  }

  openCv() {
    const token = userInfo.getToken();
    const data = {
      userId: userInfo.getUserId(),
      cv: userInfo.getUserId() + '.pdf',
      token
    }
    const _data = JSON.stringify(data)
   
    // window.open('http://localhost:3000/pdf/' + _data);
    window.open('https://gentle-ridge-67558.herokuapp.com/pdf/' + _data);

  }

}
