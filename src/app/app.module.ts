// importaciones de @angular
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// importaciones de Routin module o rutas
import { AppRoutingModule } from './app-routing.module';

// importaciones de los componentes
import { AppComponent } from './app.component';
import { FormFirstComponent } from './form-first/form-first.component';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { NavBarComponent } from './module/nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './module/home/home.component';

// importaciones de los componentes de primeng
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from "primeng/autocomplete";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { FormComponent } from './form/form.component';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { ProductListComponent } from './module/product-list/product-list.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormFirstComponent,
    NavBarComponent,
    ContactComponent,
    HomeComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    AvatarGroupModule,
    AvatarModule,
    MenubarModule


  ],
  providers: [
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
