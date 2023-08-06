import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import {Project} from "../Inputs/project_input/project";
import {ProjectsService} from "../Tables/projectTable/service/projects.service";
import {DeliveryNoteService} from "./Service.delivery-note";
import {Article} from "../../Interface/article";
import {ProjectArticle} from "../../Interface/projectArticle";
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatStep } from '@angular/material/stepper';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-delivery-note',
  templateUrl: './delivery-note.component.html',
  styleUrls: ['./delivery-note.component.scss']
})
export class DeliveryNoteComponent implements OnInit, OnDestroy {
  isLinear = true;
  private subscription!: Subscription;
 // displayedColumnsSender = ['select', 'article', 'firma', 'model', 'beschreibung', 'zustand', 'seriennummer'];



  projects: Project[] = [];
  projects$: Observable<Project[]>;
  projectForm: FormGroup;
  AdressesFrom: FormGroup;


  filteredSenderProjects!: Observable<Project[]>;
  filteredReceiverProjects!: Observable<Project[]>;

  senderProjectArticles: ProjectArticle[] = [];

  selectedArticles: ProjectArticle[] = [];
  displayedColumnsSender: string[] = ['select', 'artikelname', 'firma', 'model','seriennummer', 'beschreibung', 'zustand'];

  //displayedColumnsSender: string[] = ['select', 'article'];

  selectionSender = new SelectionModel<Article>(true, []);

  projectSender: Project | null = null;
  projectReceiver: Project | null = null;


  constructor(private _formBuilder: FormBuilder,private fb: FormBuilder, private projectsService: ProjectsService, private articleService :DeliveryNoteService) {
    this.projects$ = projectsService.projects;
    this.projectForm = this.fb.group({
      senderProject: [''],
      receiverProject: ['']
    });


    this.AdressesFrom = this._formBuilder.group({
      senderAddress: this._formBuilder.group({
        name: ['', Validators.required],
        additionalInfos: [''],
        street: ['',Validators.required],
        houseNumber: ['',Validators.required],
        postalCode: ['',Validators.required],
        city: ['',Validators.required]
      }),
      receiverAddress: this._formBuilder.group({
        name: ['',Validators.required],
        additionalInfos: [''],
        street: [''],
        houseNumber: [''],
        postalCode: [''],
        city: ['']
      })
    });
  }

  ngOnInit() {
    this.subscription = this.projects$.subscribe(projects => {
      this.projects = projects;

      this.projectForm = this._formBuilder.group({
        senderProject: ['', Validators.required],
        receiverProject: ['', Validators.required],
        //selectedArticles: [[], Validators.minLength(1)],

      }, { validators: this.projectValidator() });


      this.projectForm.get('senderProject')?.valueChanges.subscribe(value => {
        this.projectSender = value;
        this.selectedArticles = [];
        this.fetchSenderProjectArticles(parseInt(value));
      });

      this.projectForm.get('receiverProject')?.valueChanges.subscribe(value => {
        this.projectReceiver = value;
      });

      this.filteredSenderProjects = this.projectForm.get('senderProject')!.valueChanges
        .pipe(
          startWith(''),
          map(value => this.filterProjects(value))
        );

      this.filteredReceiverProjects = this.projectForm.get('receiverProject')!.valueChanges
        .pipe(
          startWith(''),
          map(value => this.filterProjects(value))
        );
    });
  }

  projectValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      let senderProject = group.get('senderProject')?.value;
      let receiverProject = group.get('receiverProject')?.value;

      return senderProject && receiverProject && senderProject === receiverProject ? { 'sameProject': true } : null;
    };
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  get senderProject(): string {
    return this.projectForm.get('senderProject')?.value;
  }

  get receiverProject(): string {
    return this.projectForm.get('receiverProject')?.value;
  }
  private fetchSenderProjectArticles(projectId: number): void {

    this.articleService.getProjectArticles(projectId).subscribe(articles => {

      this.senderProjectArticles = articles;

    });
  }


   updateArticle(element: ProjectArticle){

  }

  private filterProjects(value: string): Project[] {
    const filterValue = value.toLowerCase();

    return this.projects.filter(project =>  (project.ID.toString() + ' ' + project.Standort).toLowerCase().includes(filterValue));
  }

  isAllSelectedSender() {
    const numSelected = this.selectionSender.selected.length;
    const numRows = this.senderProjectArticles.length;
    return numSelected === numRows;
  }

  masterToggleSender() {
    this.isAllSelectedSender() ?
      this.selectionSender.clear() :
      this.senderProjectArticles.forEach(row => this.selectionSender.select(row));
  }

  handleCheckboxChange(article: Article) {
    const senderIndex = this.senderProjectArticles.indexOf(article);
    const selectedArticleIndex = this.selectedArticles.indexOf(article);

    if (senderIndex > -1) {
      this.senderProjectArticles.splice(senderIndex, 1);
      this.selectedArticles.push(article);
      this.selectionSender.deselect(article);
    } else if (selectedArticleIndex > -1) {
      this.selectedArticles.splice(selectedArticleIndex, 1);
      this.senderProjectArticles.push(article);
    }
  }
}
