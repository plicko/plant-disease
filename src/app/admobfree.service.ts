import { Injectable } from "@angular/core";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
  AdMobFreeRewardVideoConfig
} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';
import { threadId } from 'worker_threads';
import { NewsService } from './news.service';
import { map } from 'rxjs/operators';
import { app } from 'firebase';
 
 
@Injectable()
export class AdmobFreeService {
 admob_status:'open';
  //Interstitial Ad's Configurations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    isTesting: false,
    autoShow: false,
    id: "ca-app-pub-1862179621761632/2803082846"
    
  };
 
  //Reward Video Ad's Configurations
  RewardVideoConfig: AdMobFreeRewardVideoConfig = {
    isTesting: true, // Remove in production
    autoShow: false//,
    //id: "ca-app-pub-3940XXXXXXX42544/6300978111"
  };
 
  constructor(
    private AdMobFree: AdMobFree,private NewsService:NewsService,
    public platform: Platform
  ) {
    this.NewsService.getApp_data().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(app_data => {
     
      this.admob_status=app_data[0].admob;
      console.log('admon',this.admob_status)
    });
  
    platform.ready().then(() => {
      
      // Load ad configuration
      this.AdMobFree.interstitial.config(this.interstitialConfig);
      //Prepare Ad to Show
      this.AdMobFree.interstitial.prepare()
        .then(() => {
         // console.log(1);
        }).catch(e => console.log(e));
 
 
      // Load ad configuration
      this.AdMobFree.rewardVideo.config(this.RewardVideoConfig);
      //Prepare Ad to Show
      this.AdMobFree.rewardVideo.prepare()
        .then(() => {
          // console.log(2);
        }).catch(e => console.log(e));
 
    });
 
    //Handle interstitial's close event to Prepare Ad again
    this.AdMobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      this.AdMobFree.interstitial.prepare()
        .then(() => {
          console.log("Interstitial CLOSE");
        }).catch(e => console.log(e));
    });
    //Handle Reward's close event to Prepare Ad again
    this.AdMobFree.on('admob.rewardvideo.events.CLOSE').subscribe(() => {
      this.AdMobFree.rewardVideo.prepare()
        .then(() => {
          console.log("Reward Video CLOSE");
        }).catch(e => console.log(e));
    });
  }
 
   
  
  BannerAd() {
    if(this.admob_status=='open')
    {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false, // Remove in production
      autoShow: true,
      id:"ca-app-pub-1862179621761632/8619581965",
      
  };
  

  this.AdMobFree.banner.config(bannerConfig);

  this.AdMobFree.banner.prepare().then(() => {
   
  }).catch(e =>
    console.log("isReady " + e)
    );
  }
  }
  BannerAd2() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false, // Remove in production
      autoShow: true,
      id:"ca-app-pub-1862179621761632/1227251061",
      
  };
  

  this.AdMobFree.banner.config(bannerConfig);

  this.AdMobFree.banner.prepare().then(() => {
   
  }).catch(e =>
    console.log("isReady " + e)
    );
  }
  BannerAd3() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false, // Remove in production
      autoShow: true,
      id:"ca-app-pub-1862179621761632/1570758197",
      
  };
  

  this.AdMobFree.banner.config(bannerConfig);

  this.AdMobFree.banner.prepare().then(() => {
   
  }).catch(e =>
    console.log("isReady " + e)
    );
  }
 
  InterstitialAd() {
    if(this.admob_status=='open')
    {
    //Check if Ad is loaded
    this.AdMobFree.interstitial.isReady().then(() => {
      //Will show prepared Ad
      this.AdMobFree.interstitial.show().then(() => {
      })
        .catch(e => console.log("show " + e));
    })
  }
      //.catch(e => console.log("isReady " + e));
  }
  
  InterstitialAd2() {
    //Check if Ad is loaded
   let interstitialConfig: AdMobFreeInterstitialConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting: false,
      autoShow: false,
      id: "ca-app-pub-1862179621761632/7409516030"
      
    };
    this.AdMobFree.interstitial.config(interstitialConfig)
    this.AdMobFree.interstitial.isReady().then(() => {
      //Will show prepared Ad
        this.AdMobFree.interstitial.show().then(() => {
         
        })
        .catch(e => console.log("show " + e));
    })
      //.catch(e => console.log("isReady " + e));
  }
 
  RewardVideoAd() {
    //Check if Ad is loaded
    this.AdMobFree.rewardVideo.isReady().then(() => {
      //Will show prepared Ad
      this.AdMobFree.rewardVideo.show().then(() => {
      })
        .catch(e => console.log("show " + e));
    })
    //  .catch(e => console.log("isReady " + e));
  }
 
 
}