import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, Renderer2, RendererFactory2, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private rendererFactory = inject(RendererFactory2);
  private meta = inject(Meta);
  private platformId = inject<Object>(PLATFORM_ID);

  private renderer: Renderer2;
  productUrl: string = '';
  public readonly defaultImageWidth = '1200';
  public readonly defaultImageHeight = '630';
  public readonly defaultImageType = 'image/jpeg';
  public readonly defaultType = 'website';
  public readonly defaultTwitterCard = 'summary_large_image';
  // public readonly defaultImageUrl = ''https://webmasters360.md/assets/logo/logo.png';

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }


  setTabTitle(tabTitleKey: string) {
    this.title.setTitle(tabTitleKey);
  }

  updateTagTitle(pageTitleKey: string) {
    this.meta.updateTag({ name: 'title', content: pageTitleKey });
  }

  updateDescription(descriptionKey: string) {
    this.meta.updateTag({ name: 'description', content: descriptionKey });
  }

  updateAuthor(authorKey: string) {
    this.meta.updateTag({ name: 'author', content: authorKey });
  }

  setPublisherMetaTag(publisherKey: string) {
    this.meta.updateTag({ name: 'publisher', content: publisherKey });
  }

  setLanguage(language: string): void {
    this.meta.addTag({ name: 'language', content: language });
  }

  updateKeywords(keywordsKey: string) {
    this.meta.updateTag({ name: 'keywords', content: keywordsKey });
  }

  updateTwitterMetadata(titleKey: string, descriptionKey: string, imageUrl: string) {
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:site', content: '@webmasters360' });
    this.meta.updateTag({ name: 'twitter:title', content: titleKey });
    this.meta.updateTag({ name: 'twitter:description', content: descriptionKey });
    this.meta.updateTag({ name: 'twitter:creator', content: '@webmasters360' });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
  }

  setGeoMetaTags(placename: string, position: string, region: string) {
    this.meta.updateTag({ name: 'geo.placename', content: placename });
    this.meta.updateTag({ name: 'geo.position', content: position });
    this.meta.updateTag({ name: 'geo.region', content: region });
  }

  setDublinCoreMetaTags(title: string, date: string, description: string) {
    this.meta.updateTag({ name: 'DC.title', content: title });
    this.meta.updateTag({ name: 'DC.date', content: date });
    this.meta.updateTag({ name: 'DC.description', content: description });
  }

  setICBMMetaTag(coordinates: string): void {
    this.meta.updateTag({ name: 'ICBM', content: coordinates });
  }

  private setLocale(): void {
    this.meta.addTag({
      property: 'og:locale',
      content: 'ro',
    });
  }

  private setDefaultImage(): void {
    // this.addMetaTag('property', 'og:image', this.defaultImageUrl);
    this.addMetaTag('property', 'og:image:width', this.defaultImageWidth);
    this.addMetaTag('property', 'og:image:height', this.defaultImageHeight);
    this.addMetaTag('property', 'og:image:type', this.defaultImageType);
  }

  updateOpenGraphMetadata(titleKey: string, descriptionKey: string, imageUrl: string, url: string) {
    
    this.setImage(imageUrl);
    this.addMetaTag('property', 'og:title', titleKey);
    this.addMetaTag('property', 'og:description', descriptionKey);
    this.addMetaTag('property', 'og:site_name', 'Webmasters360');
    this.addMetaTag('property', 'og:url', url);
    this.addMetaTag('property', 'og:image', imageUrl);
    this.addMetaTag('property', 'og:image:secure_url', imageUrl);
    this.meta.updateTag({ name: 'robots', content: 'all' });
    this.meta.updateTag({ name: 'googlebot', content: 'all' });
    this.meta.updateTag({ name: 'bingbot', content: 'all' });
  }

  // updateProductMetaTags(product: any, imagePath: string) {
  //   const price = product.price;
  //   const currency = 'MDL';

  //   this.setTabTitle(product.productName);
  //   this.updateTagTitle(product.productName);
  //   this.updateDescription(product.productDescription);
  //   this.updateKeywords([product.categoryName, product.subcategoryName, product.manufacturerName].join(', '));
  //   this.updateTwitterMetadata(product.productName, product.productDescription, imagePath);
  //   this.setProductSchema(product.productName, product.productDescription, price, currency, imagePath);
  //   this.updateOpenGraphMetadata(product.productName, product.productDescription, imagePath, this.productUrl);
  // }

  setProductSchema(nameKey: string, descriptionKey: string, price: number, currency: string, imageUrl: string) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": nameKey,
      "description": descriptionKey,
      "image": imageUrl,
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": currency,
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2030-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
          "@type": "Organization",
          "name": "Webmasters360"
        }
      }
    };

    if (isPlatformBrowser(this.platformId)) {
      const scriptTag = this.renderer.createElement('script');
      this.renderer.setAttribute(scriptTag, 'type', 'application/ld+json');
      this.renderer.setProperty(scriptTag, 'textContent', JSON.stringify(structuredData));
      this.renderer.appendChild(document.head, scriptTag);
    }
  }

  private setImage(image: string | undefined): void {
    if (!image) {
      this.setDefaultImage();
      return;
    }
    this.updateImageMetaTags(image);
  }

  updateImageMetaTags(imageUrl: string) {
    if (isPlatformBrowser(this.platformId)) {
      const img = new Image();
      img.src = imageUrl;
      const imageType = this.getImageType(imageUrl);
      img.onload = () => {
        this.addMetaTag('property', 'og:image', imageUrl);
        this.addMetaTag('property', 'og:image:secure_url', imageUrl);
        this.addMetaTag('property', 'og:image:width', img.width.toString());
        this.addMetaTag('property', 'og:image:height', img.height.toString());
        this.addMetaTag('property', 'og:image:type', imageType);
      };

      img.onerror = () => {
        console.error('Eroare la încărcarea imaginii:', imageUrl);
      };
    }
  }

  private getImageType(imageUrl: string): string {
    const extension = imageUrl.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'png':
        return 'image/png';
      case 'gif':
        return 'image/gif';
      case 'webp':
        return 'image/webp';
      default:
        return this.defaultImageType;
    }
  }

  clearMetaTags() {
    const tagsToClear = [
      'title', 'description', 'keywords',
      'twitter:card', 'twitter:site', 'twitter:title', 'twitter:description',
      'twitter:creator', 'twitter:image', 'og:title', 'og:description',
      'og:url', 'og:image', 'og:image:width', 'og:image:height',
      'og:image:type', 'og:image:secure_url',
    ];

    tagsToClear.forEach(tag => {
      const metaTag = this.meta.getTag(`name='${tag}'`) || this.meta.getTag(`property='${tag}'`);
      if (metaTag) {
        this.meta.removeTagElement(metaTag);
      }
    });
  }

  private addMetaTag(attributeName: string, attributeValue: string, content: string): void {
    if (typeof document !== 'undefined') { // Ensure we're in a browser environment
      const tag = this.meta.getTag(`${attributeName}='${attributeValue}'`);
      if (tag) {
        this.meta.updateTag({ [attributeName]: attributeValue, content });
      } else {
        const metaTag = this.renderer.createElement('meta');
        this.renderer.setAttribute(metaTag, attributeName, attributeValue);
        this.renderer.setAttribute(metaTag, 'content', content);
        const head = document.getElementsByTagName('head')[0];
        head.insertBefore(metaTag, head.firstChild);
      }
    }
  }




  setGeneralSchema(title: string, description: string, url: string, imageUrl: string, authorName: string): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url,
      "image": imageUrl,
      "author": {
        "@type": "Person",
        "name": authorName
      },
      "publisher": {
        "@type": "Organization",
        "name": "Webmasters360",
        "logo": {
          "@type": "ImageObject",
          "url": "logo/logo_128.png"
        }
      }
    };

    if (isPlatformBrowser(this.platformId)) {
      const scriptTag = this.renderer.createElement('script');
      this.renderer.setAttribute(scriptTag, 'type', 'application/ld+json');
      this.renderer.setProperty(scriptTag, 'textContent', JSON.stringify(structuredData));
      this.renderer.appendChild(document.head, scriptTag);
    }
  }
}

