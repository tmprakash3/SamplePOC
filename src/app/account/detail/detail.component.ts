import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
  
})



export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  productId : any;
  product: any = {};

  @Input() name;

  ngOnInit() {

    // this.route.params.subscribe(Id => this.productId = Id.id);

    this.route.params.subscribe(Id=> this.productId = Id.id);

    console.log(this.productId);
     this.dataService.getProductById(this.productId).subscribe((data: any[]) => {
      
      console.log("product detail");
      this.product = data;
      console.log(data);
    });

  }

}
