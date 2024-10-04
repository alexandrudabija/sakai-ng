import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Image } from '../types/image';

@Injectable()
export class PhotoService {
    private http = inject(HttpClient);


    getImages() {
        return this.http.get<any>('demo/data/photos.json')
            .toPromise()
            .then(res => res.data as Image[])
            .then(data => data);
    }
}
