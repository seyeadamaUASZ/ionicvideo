import { Component, OnInit } from '@angular/core';
import { VideoserviceService } from '../videoservice.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data:any;
  constructor(public navCtrl: NavController ,private videoS:VideoserviceService,private router:Router) {}
  
   ngOnInit(){
      this.allVideos();
    }

    allVideos(){
      this.videoS.getVideos()
       .subscribe(resp=>{
        this.data = resp;
        console.log(resp);
    })
    }

    onloadVideo(id:String){
     this.router.navigate(['videopage',id]);
    }
}
