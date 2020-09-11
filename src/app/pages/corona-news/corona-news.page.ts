import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '../../news.service';
import { map } from 'rxjs/operators';
import { CoronaApiService } from '../../corona-api.service';
import { AdmobFreeService } from '../../admobfree.service';

@Component({
  selector: 'corona-news',
  templateUrl: './corona-news.page.html',
  styleUrls: ['./corona-news.page.scss'],
})
export class CoronaNewsPage implements OnInit {
  personal_image:any;
  personal_url:any;
  news_add:boolean=true;
  all_news:any;
  constructor( public Admob:AdmobFreeService, private formBuilder: FormBuilder, private NewsService:NewsService,  public CoronaApi:CoronaApiService) { }

  ngOnInit() {
   
   
  }
  ionViewDidEnter() {
    if(this.NewsService.personal_ads_store)
    {
    this.personal_image=this.NewsService.personal_ads_store[0].news_ad_image;
    this.personal_url=this.NewsService.personal_ads_store[0].news_ad_url;
    this.news_add=this.NewsService.news_add;
   
    this.Admob.BannerAd();
    setTimeout(() => {
      this.Admob.InterstitialAd();
    }, 10000);
  }
  }
  ionViewDidLoad() {
   
  }
  ionViewWillEnter()
  {
    
    this.CoronaApi.loadingPresent();
     this.NewsService.getNewsData().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(customers => {
    console.log(customers);
  this.all_news=customers.reverse();
     this.CoronaApi.loadingDismiss();
     
  });

  }
 

}
