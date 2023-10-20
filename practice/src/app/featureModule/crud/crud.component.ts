import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/coreModule/api.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{

  constructor(private service:ApiService){

  }



userData:any=[]
name:string='';
company:string='';
designation:string=''

ngOnInit(): void {
  this.service.getuser().subscribe((data)=>{
    console.log(data);
    this.userData=data
  })
}

  adduser(){
    console.log("hello");
  }



}
