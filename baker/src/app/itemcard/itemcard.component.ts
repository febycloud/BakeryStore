import { Component} from '@angular/core';
import{items} from '../products';
@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent  {
  products = items;
}
