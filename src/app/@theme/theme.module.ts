import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import {AuthTokenInterceptor} from './admin-service/auth/auth-token.interceptor';


const COMPONENTS = [
  SidebarComponent,
  FooterComponent,
  HeaderComponent,
  LoadingSpinnerComponent
];


const MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  NgxPaginationModule,
  ReactiveFormsModule,
  TranslateModule
];


@NgModule({
  declarations: [...COMPONENTS, NotFoundComponent],
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  exports: [...COMPONENTS, ...MODULES],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule
    };
  }
}
