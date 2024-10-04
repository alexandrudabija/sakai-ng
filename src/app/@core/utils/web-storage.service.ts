import { Injectable, inject } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { HashingService } from './hashing.service';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WebStorageService {
  private local = inject(LocalStorageService);
  private session = inject(SessionStorageService);
  private hashingService = inject(HashingService);


  set<T>(key: string, data: T, expired: number = 900) {

    const encryptedData = this.hashingService.encrypt(data, environment.TOKEN_LocalStorage);
    this.local.set(key, { data: encryptedData, now: + new Date }, expired, 's');
  }

  remove(key: string) {
    this.local.remove(key);
  }

  get(key: string) {
    const storedData = this.local.get(key);
    if (storedData && !storedData.expired) {

      return JSON.parse(this.hashingService.decrypt(storedData.data, environment.TOKEN_LocalStorage))
    }

    return null
  }

  clear():void {
    this.local.clear();
  }






  setSessionStorageService<T>(key: string, data: T, expired: number = 900) {
    const encryptedData = this.hashingService.encrypt(data, environment.TOKEN_LocalStorage);
    this.session.set(key, { data: encryptedData, now: + new Date }, expired, 's');
  }

  removeSessionStorageService(key: string) {
    this.session.remove(key);
  }

  getSessionStorageService(key: string) {
    const storedData = this.session.get(key);
    if (storedData && !storedData.expired) {

      return JSON.parse(this.hashingService.decrypt(storedData.data, environment.TOKEN_LocalStorage))
    }

    return null
  }

  clearSessionStorageService() {
    this.session.clear()
  }

}
