import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TruncatePipe } from './truncate.pipe';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule } from  '@angular/material';
import { AccountComponent } from './account/account.component';
import { CreateComponent } from './account/create/create.component';
import { DetailComponent } from './account/detail/detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdGuard } from './guard/auth-gaurd.guard';
import { ShadowDirective } from './app.directive';
// import { AuthGuardService } from './guards/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccountComponent,
    CreateComponent,
    DetailComponent,
    TruncatePipe,
    LoginComponent,
    ShadowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [AuthGaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
