import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm ,Validators} from '@angular/forms';

interface User {
  name: string;
  email: string;
  phonenumber: number;
}

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})

export class NgModelComponent {
  @ViewChild('myForm') myForm!: NgForm;

  

  user:User={
    name:'',
    email:'',
    phonenumber:0
  }
  userForm: FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required]]
    });
  }

  submit(){
    console.log(this.userForm.valid);
    this.userForm.setValue(this.user);
  if (this.userForm.valid) {
    console.log(this.user);
  }
  }
}
