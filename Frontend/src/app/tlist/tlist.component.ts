import { Component, OnInit } from '@angular/core';
import {GuideModel} from './tlist.model'
import{GuideService} from '../guide.service'
// import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tlist',
  templateUrl: './tlist.component.html',
  styleUrls: ['./tlist.component.css']
  
})
export class TlistComponent implements OnInit {
  // ctrl = new FormControl(null, Validators.required);

  // toggle() {
  //   if (this.ctrl.disabled) {
  //     this.ctrl.enable();
  //   } else {
  //     this.ctrl.disable();
  //   }
  // }

  // Districts=["Alappuzha","Ernakulam","Idukki","Kannur","Kasargod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"];
guides:GuideModel[]
filteredguides:GuideModel[];
private _searchTerm:String;
get searchTerm():String{
  return this._searchTerm;
}
set searchTerm(value:String){
  this._searchTerm=value;
  this.filteredguides=this.filterguides(value);
}


filterguides(searchString:String){
  return this.guides.filter(guide=>guide.district.toLowerCase().indexOf(searchString.toLowerCase())!== -1)


}
  constructor(public _auth:AuthService,private guideService:GuideService, private router:Router) { }
  // selected = 0;
  // hovered = 0;
  // readonly = false;

book(guide){
  var id = guide._id;
  // this.guideService.setter(guide)
  this.router.navigate(['/book/'+id])

}

doUpdate(guide){
  var id = guide._id;
    // this.guideService.setter(guide)
    this.router.navigate(['/edit/'+id])
      }

  ngOnInit(): void {
    this.guideService.getlist().subscribe((data)=>{
      this.guides =JSON.parse(JSON.stringify(data));
      this.filteredguides = this.guides;
    })

   
  }
  confirm(guides){
    if(confirm("Are you sure about deleting the details ?"))
    this.delete(guides);
  }
 
  delete(guides){
    this.guideService.deleteguide(guides._id)
    .subscribe(res=>{
      this.guides.splice(this.guides.indexOf(guides),1);
      // this.router.navigate(['/'])
    })
  }


  show(guide){
    var id = guide._id;
    // this.guideService.setter(guide)
    this.router.navigate(['/Single/'+id])
  }

}
