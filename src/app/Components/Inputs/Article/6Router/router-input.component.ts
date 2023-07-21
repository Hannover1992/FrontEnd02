import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-router-input',
  templateUrl: './router-input.component.html',
  styleUrls: ['../../../../shared_css/input.css']
})
export class RouterInputComponent implements OnInit{
  // hidePassword = true;
  //
  // routerForm!: FormGroup;
  //
  // constructor(
  //   private fb: FormBuilder,
  //   private formDataService: FormDataService,
  //   private updateElementService: RouterUpdateElementService
  // ){}
  //
  // ngOnInit(): void {
  //   this.initializeForm();
  // }
  //
  // private initializeForm() {
  //   let router: Router  | undefined = undefined;
  //
  //   if(this.updateElementService.isActivated()){
  //     let article = this.updateElementService.getArticle();
  //     router = article ? article.router : undefined;
  //   }
  //
  //   this.routerForm = this.initForm(router);
  //   this.formDataService.setForm(this.routerForm)
  // }
  //
  // initForm(router?: Router): FormGroup {
  //   return this.fb.group({
  //     router_id: router ? router.router_id : undefined,
  //     model: router ? router.model : '',
  //     ip_address: router ? router.ip_address : '',
  //     network_name: router ? router.network_name : '',
  //     network_password: router ? router.network_password : '',
  //     admin_username: router ? router.admin_username : '',
  //     admin_password: router ? router.admin_password : '',
  //   });
  // }

}
