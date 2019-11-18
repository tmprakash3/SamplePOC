import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router){}

  canActivate() {
    if(this.dataService.checkUserAuthenticated()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }


  
}
