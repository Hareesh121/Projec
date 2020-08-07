import { Component, OnInit } from '@angular/core';
import { GuideService } from '../guide.service';


import { Router, ActivatedRoute } from '@angular/router';
import { GuideModel } from '../tlist/tlist.model';



@Component({
  selector: 'app-t-edit',
  templateUrl: './t-edit.component.html',
  styleUrls: ['./t-edit.component.css']
})
export class TEditComponent implements OnInit {
 
  guideList= new GuideModel(null,null,null,null,null,null,null,null,null);
  
  constructor(private guideService:GuideService,private router:Router,private activatedRoute:ActivatedRoute) { }
 
 id;
  ngOnInit(): void
   {

    //  this.guideList=this.guideService.back();
    
    this.id= this.activatedRoute.snapshot.paramMap.get("id");
    this.guideService.seelist(this.id).subscribe((data)=>{
      this.guideList=JSON.parse(JSON.stringify(data));
    })
    
    }
   
    Update()
    {
      this.guideService.updateguide(this.guideList);
      console.log("called");
      alert("The Details have been updated");
      this.router.navigate(['/List']);
    }
}
