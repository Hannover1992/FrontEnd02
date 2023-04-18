import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent {
  @Input() Logistikkoordinator: String|undefined;
  @Input() LK_1:                String|undefined;
  @Input() LK_2:                String|undefined;
  @Input() PM_1:                String|undefined;
  @Input() PM_2:                String|undefined;
  @Input() ZuKo:                String|undefined;
}
