import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videopage',
  templateUrl: './videopage.page.html',
  styleUrls: ['./videopage.page.scss'],
})
export class VideopagePage implements OnInit {
  //idVideo:String;
  constructor(public activateRoute:ActivatedRoute,public router:Router) {
    //console.log(activateRoute.snapshot.params['id'])
    //this.idVideo = activateRoute.snapshot.params['id'];
   }
  

  ngOnInit() {
  }

}
