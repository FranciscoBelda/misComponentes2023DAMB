import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from "@ionic/angular";

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async mostrarActionSheet() {
    const aSheet =
      await this.actionSCtrl.create(
      {
        header: 'Albums',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            cssClass: 'rojo',
            handler: () => {
              console.log("Delete clicked");
            }
          },
          {
            text: 'Share',
            icon: 'share-social',
            handler: () => {
              console.log('Share clicked');
            }
          },
          {
            text: 'Play',
            icon: 'caret-forward-circle',
            handler: () => {
              console.log('Play clicked');
            }
          },
          {
            text: 'Favorite',
            icon: 'heart',
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Cancel',
            icon: 'close',
            role: "cancel",
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      }
    );
    await aSheet.present();
  }
}
