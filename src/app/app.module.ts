import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseService } from './providers/base.service';

import { TranslateModule, TranslateLoader, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthService } from './providers/auth.service';
import { AccountFromComponent } from './account-from/account-from.component';
import { HomeComponent } from './home/home.component';
import { NgbModalModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { MyLettersComponent } from './my-letters/my-letters.component';
import { JdatePipe } from './pipes/jdate.pipe';
import { LettersService } from './providers/letters.service';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

@NgModule({
  declarations: [
    AppComponent,
    AccountFromComponent,
    HomeComponent,
    RegisterAccountComponent,
    MyLettersComponent,
    JdatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbAccordionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  entryComponents: [AccountFromComponent, RegisterAccountComponent],
  providers: [BaseService, AuthService, LettersService, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
