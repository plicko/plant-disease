import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage {
  showSkip = true;
  download_data:AngularFireList<any>=null;
  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    private db: AngularFireDatabase
    
  ) {
    this.download_data=db.list('/download_manager');
  }

  startApp() {
    this.router
      .navigateByUrl('/app/tabs/home', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }
  ngOnInit() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
       
        this.router.navigateByUrl('/app/tabs/home', { replaceUrl: true });
      }
      else{
        var date=new Date().toString();
        
        var a=
        {
          'date':date,
        }
        console.log(a,"datte")
        this.download_data.push(a);
      }
    });
    this.menu.enable(false);

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  ionViewWillEnter() {
     }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
