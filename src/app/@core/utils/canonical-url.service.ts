import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanonicalUrlService {

  private readonly renderer: Renderer2;

  constructor(
    private readonly rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
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
