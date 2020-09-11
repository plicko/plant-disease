import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CoronaApiService {
  isLoading = false;
  constructor(public http: HttpClient,public loadingCtrl: LoadingController) { }

  public state_wise_data(): Observable<any>{
   

    return this.http.get("https://api.covid19india.org/state_district_wise.json");
  }

  public all_data(): Observable<any>{
    return this.http.get("https://api.covid19india.org/data.json");
  }
  public send_image(form): Observable<any>{
    console.log(form['crop_image']);
    //const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    // const HttpUploadOptions = {
    //   headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    // }
    
//     var formData = new FormData()
// formData.append('crop_name','test');
// formData.append('crop_image',form['crop_image']);
// console.log(form);
    let body = new HttpParams();
  // var body = 'crop_name=test&crop_image'+image+'';
   body = body.set('crop_name', 'test');
   body = body.set('crop_image',form['crop_image']);
   const frmData = new FormData(); frmData.append("crop_name", "name"); frmData.append("crop_image",form);
   console.log(frmData);
const httpHeaders = new HttpHeaders({
      "enctype": "multipart/form-data"
    });

const options = {
      headers: httpHeaders
    };
   // return this.http.post("https://tomato-disease-analysis.herokuapp.com/upload_image_and_get_results/",{"crop_name":name,"crop_image":image});
   alert("test1");     
   return this.http.post("https://cryptic-dawn-80855.herokuapp.com/upload_image_and_get_results/",frmData, options);
  }
  public async loadingPresent() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: 'Please wait ...',
      spinner: 'circles' 
      
    }).then(a => {
      a.present().then(() => {
        console.log('loading presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort laoding'));
        }
      });
    });
  }

  public async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('loading dismissed'));
  }
}
