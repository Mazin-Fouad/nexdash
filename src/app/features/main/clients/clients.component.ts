import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ClientsData } from '../../../core/models/clients-data';
import { ClientsService } from '../services/clients.service';
import { Subscription } from 'rxjs';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import { NewClientComponent } from '../new-client/new-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent implements OnInit, OnDestroy {
  clientsService = inject(ClientsService);
  clientsData: ClientsData[] = [];
  subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getClientsData();
  }

  getClientsData() {
    const clientSubscription = this.clientsService
      .clientsData()
      .subscribe((client) => {
        this.clientsData.push(...client);
      });

    this.subscriptions.push(clientSubscription);
  }

  openDialog(client: ClientsData) {
    this.dialog.open(ClientDetailsComponent, {
      data: client,
      width: '90vw',
    });
  }

  openNewClientDialog() {
    this.dialog.open(NewClientComponent, {
      width: '50vw',
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
