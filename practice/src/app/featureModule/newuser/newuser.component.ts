import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { ApiService } from 'src/app/coreModule/api.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit{

  Myform!: FormGroup; 
  
  constructor(private fb:FormBuilder,private apiservice:ApiService){}

  ngOnInit(): void {
    this.Myform=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phonenumber:new FormControl('',[Validators.required,Validators.pattern('[0-9 ]{10}')])
    })
  }

  submit(){
    if(this.Myform.valid){
      console.log(this.Myform.value);
      this.apiservice.Adduser(this.Myform.value).subscribe((responce)=>{
        console.log(responce);
      })
    }else{
      Object.values(this.Myform.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }


}
