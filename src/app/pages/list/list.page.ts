import {Component, OnInit, ViewChild} from '@angular/core';
import {Usuario} from "../../common/users";
import {DataService} from "../../services/data.service";
import {IonList, ToastController} from "@ionic/angular";
import {Share} from "@capacitor/share";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
usuarios: Usuario[] = [];
@ViewChild('lista', {static: false}) lista!: IonList;
  habilitado: boolean = false;
  constructor(
    private toastCtrl: ToastController,
    private dataService: DataService) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.dataService.getUsers().subscribe(
      {
        next: (value: Usuario[]) => {
          this.usuarios = value;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Complete');
        }
      }
    )
  }

  favorite(usuario: Usuario) {
    console.log(usuario);
    this.mostrarToast('Añadiendo a favoritos...');
    // ADD TO FAVORITE
    this.lista.closeSlidingItems();
  }

  async share(usuario: Usuario) {
    console.log(usuario);
    // SHARE USER
    await Share.share(
      {
        title: usuario.name,
        text: usuario.email,
        url: usuario.website,
        dialogTitle: 'Comparte al usuario'
      }
    )
    await this.lista.closeSlidingItems();
  }

  call(usuario: Usuario) {
    console.log(usuario);
    this.mostrarToast('Llamando...');
    // CALL USER PHONE
    this.lista.closeSlidingItems();
  }

  reordenar(event: any) {
    console.log(event);
    const itemMover =
      this.usuarios.splice(event.detail.from,1)[0];
    this.usuarios.splice(event.detail.to,0,itemMover);
    event.detail.complete();
  }

  private async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create(
      {
        message: mensaje,
        duration: 1500,
        color: 'success',
        icon: 'star',
        position: 'middle',
        animated: true
      }
    );
    await toast.present();
  }
}
