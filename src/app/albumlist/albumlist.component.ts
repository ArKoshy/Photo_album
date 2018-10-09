import { Component, OnInit } from '@angular/core';
import {photoService} from '../photoService';
import {Iphoto} from '../photoInt';



@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.css'],
  providers:[photoService]
})
export class AlbumlistComponent implements OnInit {


  photos: Iphoto[];
  constructor(private _photoService: photoService) { 
  
  }  

    
   
  ngOnInit() {
    this._photoService.getPhotos()
    .subscribe(
      (photolist) => this.photos = photolist
    );
    console.log(this.photos);
  }


}
