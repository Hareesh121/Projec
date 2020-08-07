import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { GuideModel } from './tlist/tlist.model';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class GuideService {
  private guide:GuideModel
  constructor(private http:HttpClient) { }

getlist()
{
    return this.http.get("http://localhost:3000/Guides");
}

addlist(detail)
{
  return this.http.post("http://localhost:3000/add",{"guides":detail})
  
  .subscribe(data=>{console.log(data)})
  console.log("called");
 
}

deleteguide(_id:String){
  return this.http.delete("http://localhost:3000/delete/"+_id)
}


updateguide(details){
  return this.http.put("http://localhost:3000/edit",{"guides":details})
  .subscribe(data=>{console.log(data)});



}

seelist(id)
{
    return this.http.get("http://localhost:3000/Guides/"+id);
}
}
