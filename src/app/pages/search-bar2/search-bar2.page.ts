import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-search-bar2',
  templateUrl: './search-bar2.page.html',
  styleUrls: ['./search-bar2.page.scss'],
})
export class SearchBar2Page implements OnChanges {
  @Output() selectedChanged: EventEmitter<any> = new EventEmitter();
  title = 'Search';
  multiple = false;
  itemTextField = 'name.first';
  users: any[] = [];
  isOpen = false;
  selected: any[] = [];
  filtered: any[] = [];
  constructor(private dataService: DataService) {
    this.loadUsers();
  }

  private loadUsers() {
    this.dataService.getOtherUsers().subscribe(
      {
        next: (value) => {
          this.users = value.results;
          this.filtered = this.users;
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

  open(){
    this.isOpen = true;
  }
  cancel(){
    this.isOpen = false;
  }
  confirm(){
    this.isOpen = false;
  }

  leaf = (obj: any) => this.itemTextField.split('.')
    .reduce((value, el) => value[el], obj);

  itemSelected(myItem: any){
    if(!this.multiple) {
      if(this.selected.length){
        this.selected = [];
        this.filtered.forEach((item: any) => item.selected = false);
        this.filtered[this.filtered.findIndex(item => item === myItem)].selected = true;
      }
    }

    if(myItem.selected) {
      this.selected.push(myItem);
    }else {
      this.selected.splice(this.selected.indexOf(myItem),1);
    }

    this.selectedChanged.emit(this.selected);
    if(!this.multiple){
      this.isOpen = false;
    }
  }

  filter(event: any){
    const filter = event.detail.value.toLowerCase();
    this.filtered = this.users.filter((item: any) =>
      this.leaf(item).toLowerCase().indexOf(filter) >= 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filtered = this.users;
  }
}
