import { Component } from '@angular/core';
import {ArticleFormDataService} from "../article/article-form-data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-asset-compose-create',
  templateUrl: './asset-compose-create.component.html',
  styleUrls: ['./asset-compose-create.component.css']
})
export class AssetComposeCreateComponent {
  actualFormData: any;
  private formDataSubscription: Subscription;

  constructor(private formDataService: ArticleFormDataService) {
    this.formDataSubscription = this.formDataService.getFormData().subscribe(data => {
      this.actualFormData = data;
      console.log(this.actualFormData);
    });
  }

  ngOnDestroy(): void {
    this.formDataSubscription.unsubscribe();
  }
}
