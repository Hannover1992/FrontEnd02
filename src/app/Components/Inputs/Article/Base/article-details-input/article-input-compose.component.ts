import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-article-input-compose',
  templateUrl: './article-input-compose.component.html',
  styleUrls: ['./article-input-compose.component.css']
})


export class ArticleInputComposeComponent {
  @Input() artikelForm!: FormGroup;



  get assetDetails(): FormGroup {
    return this.artikelForm.get('asset_details') as FormGroup;
  }

  get assetDates(): FormGroup {
    return this.artikelForm.get('date_info') as FormGroup;
  }

  get assetNumbers(): FormGroup {
    return this.artikelForm.get('asset_numbers') as FormGroup;
  }


}
