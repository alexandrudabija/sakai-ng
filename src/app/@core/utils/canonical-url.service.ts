import { DOCUMENT } from '@angular/common';
import { Injectable, Renderer2, RendererFactory2, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanonicalUrlService {
  private readonly rendererFactory = inject(RendererFactory2);
  private readonly document = inject<Document>(DOCUMENT);


  private readonly renderer: Renderer2;

  constructor() {
    const rendererFactory = this.rendererFactory;

    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public createCanonicalUrl(url: string): void {
    const link: HTMLLinkElement = this.getOrCreateElement('link', 'rel', 'canonical');
    link.setAttribute('href', url);
  }

  private getOrCreateElement(tagName: string, attributeName: string, attributeValue: string): HTMLLinkElement {
    let element = this.document.querySelector(`${tagName}[${attributeName}="${attributeValue}"]`) as HTMLLinkElement;
    if (!element) {
      element = this.renderer.createElement(tagName) as HTMLLinkElement;
      element.setAttribute(attributeName, attributeValue);
      this.renderer.appendChild(this.document.head, element);
    }
    return element;
  }
}
