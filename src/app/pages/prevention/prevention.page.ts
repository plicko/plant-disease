import { Component, OnInit } from '@angular/core';
import { AdmobFreeService } from '../../admobfree.service';

@Component({
  selector: 'prevention',
  templateUrl: './prevention.page.html',
  styleUrls: ['./prevention.page.scss'],
})
export class PreventionPage implements OnInit {

  constructor(public Admob:AdmobFreeService) { }

  ngOnInit() {
  }
  ionViewDidLoad() {
  
    }
    ionViewDidEnter() {
      this.Admob.BannerAd();
      setTimeout(() => {
        this.Admob.InterstitialAd();
      }, 3000);
    }
  }
   
