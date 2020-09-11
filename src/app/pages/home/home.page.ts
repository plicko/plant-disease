import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../news.service';
import { map } from 'rxjs/operators';
import { LoadingController ,AlertController, NavController} from '@ionic/angular';
import { CoronaApiService } from '../../corona-api.service';
import { Chart } from 'chart.js';
import { AdmobFreeService} from '../../admobfree.service'
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions} from '@ionic-native/camera-preview/ngx';
@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
 public Deasease:any;
  public imgURL: any;
  public maxZoom: any = 10;
  public zoom: any = 0;
form: FormGroup;
constructor(public navCtrl: NavController, public imagePicker: ImagePicker, private alertCtrl: AlertController, private cameraPreview: CameraPreview, public loadingCtrl: LoadingController,public fb: FormBuilder,private NewsService:NewsService, public router: Router,private CoronaApi:CoronaApiService,   public Admob:AdmobFreeService
  ) {
    this.form = this.fb.group({
      crop_name: [''],
      crop_image: [null]
    })
   }

getEachState(value)
{
  this.Admob.InterstitialAd();
  this.router.navigate(['/app/tabs/speakers/speaker-details/',value]);
}

get(event)
{
  this.Deasease='';
  // const file = (event.target as HTMLInputElement).files[0];
  // this.form.patchValue({
  //   crop_image: file
  // });
  //this.form.get('crop_image').updateValueAndValidity()
const file = (event.target as HTMLInputElement).files[0];
console.log(file,"event");
this.CoronaApi.send_image(event.target.files[0])
  .subscribe(
    data => {
      if(data)
      {
     // this.states = Object.keys(data);
    alert("hii");
    alert(JSON.stringify(data));
       console.log(data['response']);
     var a=  Math.max.apply(Math, data['response'].map(function(o) { return o.prob; }))

       console.log(a);
     
     }
     else
     {
   alert("error");
     }
       
     
    },
    error =>{
      alert(JSON.stringify(error));
     
    }     
  
  )
    
}
submitForm() {
  console.log(this.form.value)

}

// camera functions


 
ionViewWillEnter()
{

     
     
}

ionViewWillLeave ()
{
  
}
      
start_camera()

{

  console.log(window.screen.width, window.screen.height);

    // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: false,
      toBack: true,
      tapToFocus: true
    };

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });

        // get maxZoom
        this.cameraPreview.getMaxZoom().then((res)=>this.maxZoom = res, (err)=>this.maxZoom = 10);
        //get current zoom
        this.cameraPreview.getZoom().then((res)=>this.zoom = res, (err)=>this.zoom = 0);

}
stop_camera()
{
  this.cameraPreview.stopCamera();
  this.imgURL = "";
  this.zoom = 0;
}
captureImage()
{
        // picture options
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 300,
      height: 300,
      quality: 60
    }

    // take a picture
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      this.imgURL = 'data:image/jpeg;base64,' + imageData;
      alert(imageData);
     // this.cameraPreview.hide();
     
    }, (err) => {
      console.log(err);
    });

}

reverseCam()
{
    // Switch camera
    this.cameraPreview.switchCamera();
}

pickImage()
{
  const options = {
    maximumImagesCount: 1,
    outputType: 1
  }
  this.imagePicker.getPictures(options).then((results) => {
    
    if(results[0] != null)
    {
      this.imgURL = results[0];
      this.call_api();
    }
  

  }, (err) => { 
    // this.cameraPreview.show();
  });
}


 cameraFocus(e)
 {
   //tab to focus x,y
  //  console.log(e.center.x, e.center.y);
   this.cameraPreview.tapToFocus(e.center.x, e.center.y);

 }


call_api()
{
  this.CoronaApi.send_image(this.imgURL)
  .subscribe(
    data => {
      if(data)
      {
     // this.states = Object.keys(data);
    alert("hii");
    alert(JSON.stringify(data));
       console.log(data);
     
     }
     else
     {
   alert("error");
     }
       
     
    },
    error =>{
      alert(JSON.stringify(error));
     
    }     
  
  )

  
}

 

}
