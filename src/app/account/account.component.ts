import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  products = [];

  constructor(private dataService: DataService, private router: Router) { }


  
  showDetails(this, event) {
    console.log("showDetails called:");
    console.log(this);
    console.log(event.target);
    console.log(event.target.tagName);

    var ev = event.target.tagName;
    if(ev === 'BUTTON' || ev === 'IMG' || ev === 'MAT-CARD-TITLE') {
      var id  = event.target.id;

      this.router.navigate(['/details', id]);

    }


    //this.router.navigate(['/details', Id]);
  }

  ngOnInit() {

  
    // console.log(tree);


    // this.dataService.sendGetRequest().then((data: any[])=>{
    //   console.log("fetching products");
    //   this.products = data;
    //   console.log(data);
    // });
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log("fetching products");
      this.products = data;
      console.log(data);
    })


   

  }



}
