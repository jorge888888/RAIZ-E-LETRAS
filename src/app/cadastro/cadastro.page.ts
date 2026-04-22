import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonInput, IonButton, IonIcon, IonRouterLink } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  imports: [IonContent, IonItem, IonInput, IonButton, IonIcon, IonRouterLink, CommonModule, FormsModule, RouterLink],
})
export class CadastroPage {
  constructor() {}
}