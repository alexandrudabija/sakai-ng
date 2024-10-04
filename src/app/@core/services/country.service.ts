import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class CountryService {
    private http = inject(HttpClient);


    getCountries() {
        return this.http.get<any>('demo/data/countries.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}
