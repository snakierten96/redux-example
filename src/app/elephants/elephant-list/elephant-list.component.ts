import { Component } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-elephant-list',
  templateUrl: './elephant-list.component.html',
  styleUrls: ['./elephant-list.component.scss']
})
export class ElephantListComponent {

  @select() readonly elephants$;

  getItemName(index,item) {
    return item.name;
  }

}
