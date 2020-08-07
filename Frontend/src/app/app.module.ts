import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TlistComponent } from './tlist/tlist.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TAddComponent } from './t-add/t-add.component';
import { FormsModule } from '@angular/forms';
import { TEditComponent } from './t-edit/t-edit.component';
import { GuideService } from './guide.service';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
// import { RegisteerComponent } from './registeer/registeer.component';
import { RegisterComponent } from './register/register.component';
import{AuthService} from './auth.service';
// import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { STlistComponent } from './s-tlist/s-tlist.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TlistComponent,
    TAddComponent,
    TEditComponent,
    BookComponent,
    LoginComponent,
    AdminComponent,
    // RegisteerComponent,
    RegisterComponent,
    // HomeComponent,
    FooterComponent,
    STlistComponent
    // TlistFilterPipe
    // TEditComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgbModule,
    FormsModule,
    // NgbModule
    // NgbdRatingForm
 
  ],
  providers: [GuideService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule  { }
