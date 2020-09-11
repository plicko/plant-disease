import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController, AlertController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';
import {CoronaApiService} from './corona-api.service'
import { from } from 'rxjs';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { NewsService } from './news.service';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [

    {
      title: 'Home',
      url: '/app/tabs/home',
      icon: 'timer'
    },
    {
      title: 'Tomato Diseases Info',
      url: '/app/tabs/tomato_diseases_info',
      icon: 'timer'
    },
    {
      title: 'Prevention',
      url: '/app/tabs/prevention',
      icon: 'logo-buffer'
    },
    {
      title: 'News',
      url: '/app/tabs/news',
      icon: 'book'
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    },
    {
      title: 'Share',
      url: '/app/tabs/share',
      icon: 'share'
    },
    {
      title: 'Admin',
      url: '/app/tabs/admin',
      icon: 'person'  
    } 
  ];
  loggedIn = false;
  dark = true;
  develop_by:any;
  backButtonSubscription:any;
  constructor(
    private nav:NavController,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    public CoronaApi:CoronaApiService,
    private NewsService:NewsService,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
  }
 get_all()
 {
  
 }

  async ngOnInit() {
    console.log("hii")
    this.NewsService.getApp_data().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(app_data => {
      console.log("hii",app_data[0].app)
      this.develop_by=app_data;
      if(app_data[0].app=='open')
      {
  
      
    }
    else{
      console.log("hii else",app_data[0].app)
      this.App_closed();
    }
     
    });
  
  }
  App_closed() {
    const alert =  this.alertCtrl.create({
      header: 'Sorry !',
      subHeader: '',
      message: 'App is in Under Maintenance',
      buttons: [
         {
          text: 'Ok',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });

    alert.then(x => x.present());  
    
  }
  exit_alert()
  {
    const alert =  this.alertCtrl.create({
      header: 'Exit',
      subHeader: '',
      message: 'Are you sure you want to exit?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
           handler: () => {
           
          }
        }, {
          text: 'Yes',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
 
    });
    alert.then(x => x.present());
  }
  ngAfterViewInit() {
    console.log(this.nav,"popppp");
    console.log(this.router.getCurrentNavigation(),"help");  
   this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        console.log( res,"values")
        this.router.navigateByUrl('/app/tabs/home', { replaceUrl: true });
      }
    });
   this.backButtonSubscription = this.platform.backButton.subscribe(() => {
   
    this.exit_alert();
   
   
      //navigator['app'].exitApp();
     // let view = this.router.getCurrentNavigation();

      
      // if (view.component.name == "HomePage") {
      //   //Double check to exit app                  
      //   if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
      //     platform.exitApp(); //Exit from app
      //   } else {
      //     let toast = this.toastCtrl.create({
      //       message: 'Press back again to exit App',
      //       duration: 3000,
      //       position: 'bottom'
      //     });
      //     toast.present();
      //     lastTimeBackPress = new Date().getTime();
      //   }
      // } else {
      //   // go to previous page
      //   this.nav.pop({});
      // }
    });
  }
  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is('cordova')) {
        this.setupPush();
      }
    });
  }
  
  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('cc38301f-4b64-48a0-9053-68ea9b4d64d9', '76151864937');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });
 
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;
 
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
 
    this.oneSignal.endInit();
  }
 
  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }
  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }

  

}
