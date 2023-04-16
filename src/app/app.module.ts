import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ProduitsComponent } from './produits/produits.component';
import { VentesComponent } from './ventes/ventes.component';
import { PaiementsComponent } from './paiements/paiements.component';
import { ParametresComponent } from './parametres/parametres.component';
import { UserComponent } from './user/user.component';
import { NotificationComponent } from './notification/notification.component';
import { MessagesComponent } from './messages/messages.component';
import { AddProduitsComponent } from './produits/add-produits/add-produits.component';
import { LinkProduitsComponent } from './produits/link-produits/link-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CommandesComponent,
    ProduitsComponent,
    VentesComponent,
    PaiementsComponent,
    ParametresComponent,
    UserComponent,
    NotificationComponent,
    MessagesComponent,
    AddProduitsComponent,
    LinkProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
