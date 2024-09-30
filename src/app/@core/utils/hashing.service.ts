import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-ts';
@Injectable({
  providedIn: 'root',
})
export class HashingService {


  encrypt(data: any, key: string): string {
    const dataStr = JSON.stringify(data)
    return AES.encrypt(dataStr, key).toString();

  }

  decrypt(data: any, key: string):any {

    return AES.decrypt(data, key).toString(enc.Utf8);

  }



}
