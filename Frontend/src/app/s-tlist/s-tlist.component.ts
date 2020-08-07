import { Component, OnInit } from '@angular/core';
import { GuideService } from '../guide.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GuideModel } from '../tlist/tlist.model';

@Component({
  selector: 'app-s-tlist',
  templateUrl: './s-tlist.component.html',
  styleUrls: ['./s-tlist.component.css']
})
export class STlistComponent implements OnInit {
  guide= new GuideModel(null,null,null,null,null,null,null,null,null);
  constructor(private guideService:GuideService,private router:Router,private activatedRoute:ActivatedRoute) { }
id;
  ngOnInit(): void {  this.id= this.activatedRoute.snapshot.paramMap.get("id");
  this.guideService.seelist(this.id).subscribe((data)=>{
    this.guide=JSON.parse(JSON.stringify(data));
  })
  }
  book(guide){
    var id = guide._id;
    // this.guideService.setter(guide)
    this.router.navigate(['/book/'+id])
  
  }
}
