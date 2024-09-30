import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  private scripts: { [key: string]: { loaded: boolean, src: string, promise: Promise<void> } } = {};

  load(name: string, src: string): Promise<void> {
    if (this.scripts[name]) {
      // Dacă scriptul este deja încărcat sau în curs de încărcare, returnează promisiunea existentă.
      return this.scripts[name].promise;
    }

    // Inițializează înregistrarea pentru script.
    this.scripts[name] = {
      loaded: false,
      src,
      promise: new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          this.scripts[name].loaded = true;
          resolve();
        };
        script.onerror = () => {
          delete this.scripts[name];
          reject('Script load error');
        };
        document.head.appendChild(script);
      })
    };

    return this.scripts[name].promise;
  }
}
