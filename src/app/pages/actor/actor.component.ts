import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  constructor(private service:MovieApiServiceService,private router:ActivatedRoute) {
  }

  getActorDetailResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getActor(getParamId)
  }

  getActor(id:any){
    this.service.getActorDetails(id).subscribe(async(result)=>{
      this.getActorDetailResult = await result;
    })
  }
}
