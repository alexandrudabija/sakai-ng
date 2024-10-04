import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WebStorageService } from './web-storage.service';
@Injectable({
    providedIn: 'root',

})
export class CacheService {
    private http = inject(HttpClient);
    private webStorageService = inject(WebStorageService);



    //  Generic method to set data in localStorage with a time-to-live (TTL).
    private set<T>(key: string, data: T, ttl: number): void {


        this.webStorageService.set(key, data, ttl)
    }

    //  Generic method to get data from localStorage.
    private get<T>(key: string): T | null {
        return this.webStorageService.get(key)

    }

    // Public method to get data, either from cache or via HTTP request.
    public getData<T>(key: string, url: string, ttl: number = 900): Observable<T> {
        //900; default is 15 min
        const cachedData = this.get<T>(key); // Try to get the cached data using the key.
        if (cachedData !== null) {

            return of(cachedData) as Observable<T> // If cached data is available, return it as an Observable.
        }


        return this.http.get<T>(url).pipe(
            tap(data => this.set<T>(key, data, ttl)) // Cache the response data using key.
        );
    }

}
