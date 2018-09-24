import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

import {HeaderComponent} from './header/header.component';
import {RequestInterceptor} from './auth/request.interceptor';
import {FooterComponent} from './footer/footer.component';
import {ShowIfLoggedModule} from '../shared/directives/show-if-logged/show-if-logged.module';
import {MenuModule} from '../shared/components/menu/menu.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    ShowIfLoggedModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
}
