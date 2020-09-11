import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '../../news.service';
import { map } from 'rxjs/operators';
import { CoronaApiService } from '../../corona-api.service';

@Component({
  selector: 'about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  about_data:any;
  suggestionForm:FormGroup;
  constructor( private formBuilder: FormBuilder, private NewsService:NewsService,  public CoronaApi:CoronaApiService) { }

  ngOnInit() {
    this.CoronaApi.loadingPresent();
    this.NewsService.getAbout_data().snapshotChanges().pipe(
   map(changes =>
     changes.map(c =>
       ({ key: c.payload.key, ...c.payload.val() })
     )
   )
 ).subscribe(about => {
   console.log(about);
 this.about_data=about;
    this.CoronaApi.loadingDismiss();
    
 });
    this.suggestionForm = this.formBuilder.group({
      suggestion: ['',[Validators.required]  ],
     
     });
    
  }
  submit(value)
  {

 console.log(value);
 this.NewsService.sendsuggestion(value);
 this.suggestionForm.get('suggestion').setValue('');
 alert('Data Updated');
  }

}
