import {Component} from "@angular/core";

@Component({
  selector: 'b-home',
  templateUrl: './home.html',
  styleUrls: ['./home.less']
})
export class HomeComponent {
  arr = [1, 2, 3, 1];
  tags = ["dragons", "test", "training", "tags", "as", "coffee", "caramel", "money", "sushi", "flowers", "happiness", "cars", "sugar", "japan", "cookies", "well", "clean", "animation", "baby"];
}
