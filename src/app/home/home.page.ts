import { Component } from '@angular/core';
import { IonContent, IonItem, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonItem, IonInput, IonButton, IonIcon],
})
export class HomePage {
  constructor() {}
}