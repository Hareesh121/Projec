import { Component, OnInit } from '@angular/core';
import{GuideService} from '../guide.service'
import { GuideModel } from '../tlist/tlist.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-t-add',
  templateUrl: './t-add.component.html',
  styleUrls: ['./t-add.component.css']
})
export class TAddComponent implements OnInit {
  guideList=new GuideModel(null,null,null,null,null,null,null,null,null);
  constructor(private guideService:GuideService ,private router:Router) { }

  ngOnInit(): void {
  }
Addguide(){
  this.guideService.addlist(this.guideList)
  console.log("called");
   alert("Guide Details HAve been Added !!");
  this.router.navigate(['/List']);
}
}
