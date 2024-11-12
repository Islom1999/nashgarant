import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './layouts/components/navbar/navbar.component';
import { FooterComponent } from './layouts/components/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		LayoutsComponent,
		AuthComponent,
		NavbarComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
