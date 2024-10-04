import { Component, OnInit, inject } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { Product } from 'src/app/@core/types/product';
import { ProductService } from 'src/app/@core/services/product.service';
import { PhotoService } from 'src/app/@core/services/photo.service';

   
  
@Component({
    templateUrl: './mediademo.component.html',
    standalone: true,
    imports: [CarouselModule, SharedModule, ButtonModule, ImageModule, GalleriaModule],
  
})
export class MediaDemoComponent implements OnInit {
    private productService = inject(ProductService);
    private photoService = inject(PhotoService);


    products!: Product[];

    images!: any[];

    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    carouselResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    ngOnInit() {
        this.productService.getProductsSmall().then(products => {
            this.products = products;
        });

        this.photoService.getImages().then(images => {
            this.images = images;
        });
    }
    
}
