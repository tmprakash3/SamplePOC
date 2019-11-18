import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';

@Directive({ 
    selector: '[input-box]' 
})

export class ShadowDirective implements OnInit {
    @Input() products: any[];
    @Input() value: number;
    
    constructor(private dataService: DataService){}

    ngOnInit() {
        // console.log("input-box keys : ", this.name, this.value);
        console.log("product array");
        console.log(this.products);

        // this.dataService.sendGetRequest().subscribe((data: any[])=>{
        //     console.log("fetching products1");
        //     this.products = data;
        //     console.log(data);
        //   })
    }
    // constructor(elem: ElementRef, renderer: Renderer2) {
    //    renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
    // }
}