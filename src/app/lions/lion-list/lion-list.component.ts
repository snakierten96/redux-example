import { Component } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-lion-list',
  templateUrl: './lion-list.component.html',
  styleUrls: ['./lion-list.component.scss']
})
export class LionListComponent {

  @select() readonly lions$;

  getItemName(index,item) {
    return item.name;
  }

}
