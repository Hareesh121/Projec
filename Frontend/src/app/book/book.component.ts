import { Component, OnInit } from '@angular/core';
import { GuideService } from '../guide.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GuideModel } from '../tlist/tlist.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
id;
  constructor(private guideService:GuideService,private router:Router,private activatedRoute:ActivatedRoute) { }
  guideList= new GuideModel(null,null,null,null,null,null,null,null,null);
  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get("id");
    this.guideService.seelist(this.id).subscribe((data)=>{
      this.guideList=JSON.parse(JSON.stringify(data));
    })
  }



confirm(){
  if(confirm("Confirm Booking ?"))
  this.pay();
}


  pay(){
   this.router.navigate(['/List'])
   alert("Your Guide has been booked !!")

}
}
