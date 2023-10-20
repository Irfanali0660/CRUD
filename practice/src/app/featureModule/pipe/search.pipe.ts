import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,name:string,quary:string ): any {

    let search=new RegExp(quary,'i')
    if(quary==''){
      return value;
    }else if(name=='name'){
        return value.filter((data:any)=>{
          return data.name.match(search)
        })
    }else if(name=='company'){
      return value.filter((data:any)=>{
        return data.company.name.match(search)
      })
     }else{
      return value.filter((data:any)=>{
        return data.company.designation.match(search)
    })
}
  }

}
