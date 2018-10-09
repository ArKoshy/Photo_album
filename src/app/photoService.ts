import { Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';
import {Iphoto} from './photoInt';
import { Observable } from 'rxjs/Rx';



@Injectable()  //Decorator
export class photoService{
    
  _photos : Iphoto[];
        constructor (private _http:Http) {}

        getPhotos():Observable<Iphoto[]>{
            return this._http.get('https://jsonplaceholder.typicode.com/photos')
            .map( 
                (response:Response) => <Iphoto[]> response.json()      
                
            )
        }

            // getServer(): Observable<photoInt> {
            //         return this._http.get('https://jsonplaceholder.typicode.com/photos')
            //         .map(
            //             (response:Response) =><photoInt[]>response.json()
            //         )
            // }
        }
    