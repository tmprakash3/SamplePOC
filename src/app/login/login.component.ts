import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private dataService: DataService, private router: Router) { }


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  submit() {
    console.log(this.form.value.username);
    console.log(this.form.value.password);
    let login:any = this.dataService.checkLogin();
    console.log(login);
    console.log(login.token);

    localStorage.setItem('token',login.token);

    this.router.navigate(['/products']);


  }

  ngOnInit() {
    console.log(this.form);
  }

}
