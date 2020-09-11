import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deasese-show',
  templateUrl: './deasese-show.page.html',
  styleUrls: ['./deasese-show.page.scss'],
})
export class DeaseseShowPage implements OnInit {
  diseases = [

    {
      title: 'Bacterial Spot',
      url: '/assets/img/bacterial.jpg',
     
    },
    {
      title: 'leaf Mold',
      url: '/assets/img/leaf_mold.jpg',
    
    } 
  ];
  constructor() { }

  ngOnInit() {
  }

}
