import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderJivositeService {

  loadScript(src: string, id: string): void {
    if (!document.getElementById(id)) {
      const script = document.createElement('script');
      script.src = src;
      script.id = id;
      script.defer = true;
      document.body.appendChild(script);
    }
  }
}
