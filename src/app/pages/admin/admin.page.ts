import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '../../news.service';
import { map } from 'rxjs/operators';
import { CoronaApiService } from '../../corona-api.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  WorldDataForm:FormGroup;
  NewsForm:FormGroup;
  show_Admin:boolean=false;
  constructor( private formBuilder: FormBuilder, private NewsService:NewsService,  public CoronaApi:CoronaApiService) { }

  ngOnInit() {
    this.NewsForm = this.formBuilder.group({
      title: ['',[Validators.required]  ],
      description: ['',[Validators.required]  ],
      date: [new Date().toISOString() ],
     });
   
  }
  submitNews(value)
  {
    console.log(value);
    this.NewsService.setNewsData(value);
    alert("New News Added")
  }

  admin_input(val)
  {
   if(val=='changetheworld')
   {
     this.show_Admin=true;
   }
  }
}
