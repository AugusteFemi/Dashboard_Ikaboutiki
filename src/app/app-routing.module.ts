import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommandesComponent } from './commandes/commandes.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationComponent } from './notification/notification.component';
import { PaiementsComponent } from './paiements/paiements.component';
import { ParametresComponent } from './parametres/parametres.component';
import { ProduitsComponent } from './produits/produits.component';
import { UserComponent } from './user/user.component';
import { VentesComponent } from './ventes/ventes.component';

const routes: Routes = [
  {path: '', 
  component: DashboardComponent,
},
{ path: 'dashboard', 
    component: DashboardComponent,
},
{path: 'commandes', 
  component: CommandesComponent,
},
{path: 'home', 
component: HomeComponent,
},
{path: 'messages', 
component: MessagesComponent,
},
{path: 'notification', 
component: NotificationComponent,
},
{path: 'paiements', 
component: PaiementsComponent,
},
{path: 'parametres', 
component: ParametresComponent,
},
{path: 'produits', 
component: ProduitsComponent,
},
{path: 'user', 
component: UserComponent,
},
{path: 'ventes', 
component: VentesComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
