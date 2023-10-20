import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  Adduser(data:any){
    return this.http.post(environment.BASE_URL+'/adduser',data)
  }

  getuser(){
    return this.http.get('https://zil-test.s3.us-east-1.amazonaws.com/json-data.json')
  }

}
