import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { UpdateProfileComponent } from './sidenav/update-profile/update-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../../environments/environment.development';
import { MatIconModule } from '@angular/material/icon';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { NewClientComponent } from './new-client/new-client.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    SidenavComponent,
    UpdateProfileComponent,
    ClientsComponent,
    MainComponent,
    DashboardComponent,
    ClientDetailsComponent,
    OrderCardComponent,
    NewClientComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MainRoutingModule,
    RouterOutlet,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [DatePipe],
})
export class MainModule {}
