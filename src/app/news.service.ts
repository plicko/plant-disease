import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private dbPath = '/world_data';
 
  world_corona_data: AngularFireList<any> = null;
  suggestion: AngularFireList<any> = null;
   news: AngularFireList<any> = null;
  world_corona_data2: any;
  Ad_flags:AngularFireList<any>=null;
  personal_ads:AngularFireList<any>=null;
  App_data:AngularFireList<any>=null;
  about_data:AngularFireList<any>=null;
  app_data_store:any;
  personal_ads_store:any;
  //ad show flags
  home_add:true
news_add:true
prevention_add:true
state_wise_add:true
symptoms:true
world_counter_add:true

  constructor(private db: AngularFireDatabase) {
    this.world_corona_data = db.list(this.dbPath);
    this.about_data=db.list('/about_data');
    this.Ad_flags = db.list('/Add_flags');
    this.App_data = db.list('/app_flags');
    this.personal_ads=db.list('/personal_ads')
    this.suggestion=db.list('/suggestion');
  this.world_corona_data2=db.object('/world_data/data');
  this.news=db.list('/news');
  console.log("hello");

  this.getAddFlagsData().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(Ad_flag => {
    console.log(Ad_flag[0].home_add,"flags");
    
    this.home_add=Ad_flag[0].home_add;
this.news_add=Ad_flag[0].news_add;
this.prevention_add=Ad_flag[0].prevention_add;
this.state_wise_add=Ad_flag[0].state_wise_add;
this.symptoms=Ad_flag[0].symptoms;
this.world_counter_add=Ad_flag[0].world_counter_add;
   
  });
  
  this.getPersonal_ads().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(personal_ads => {
    this.personal_ads_store=personal_ads;
    console.log(this.personal_ads_store,"personal");
   
  });
  
  
  }
  ngOnInit() {
   
     
  }
  sendsuggestion(data)
  {
    this.suggestion.push(data);
  }
  
  setNewsData(data): void {
    console.log(data,"ticket");
    this.news.push(data);
  }
  getNewsData(): AngularFireList<any> {
    return this.news;
  }
  getAddFlagsData():AngularFireList<any> {
   return this.Ad_flags;
  }
  getPersonal_ads():AngularFireList<any>
  {
    return this.personal_ads
  }

  getApp_data():AngularFireList<any>
  {
    return this.App_data;
  }
  getAbout_data():AngularFireList<any>
  {
    return this.about_data;
  }
}