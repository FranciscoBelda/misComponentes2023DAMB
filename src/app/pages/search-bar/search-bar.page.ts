import {Component, OnInit, ViewChild} from '@angular/core';
import {Album} from "../../common/albums";
import {DataService} from "../../services/data.service";
import {IonSearchbar} from "@ionic/angular";
import {search} from "ionicons/icons";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {
  albums: Album[] = [];
  textoBuscar = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadAlbums();
  }

  private loadAlbums() {
    this.dataService.getAlbums().subscribe(
      {
        next: value => {
          this.albums = value;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Done');
        }
      }
    )
  }

  buscar(event: any) {
    this.textoBuscar = event.detail.value;
  }
}
