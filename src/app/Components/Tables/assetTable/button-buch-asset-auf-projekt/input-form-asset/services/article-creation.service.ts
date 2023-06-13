import {Injectable} from "@angular/core";
import {UnterKategorieService} from "../../../../../Services/unter-kategorie.service";
import {FormGroup} from "@angular/forms";
import {Article} from "../../../Interface/article";
import {ProjectArticle} from "../../../Interface/projectArticle";
import {Util} from "./util.service";
import {FormRetrieval} from "./form-retrieval.service";


@Injectable({
  providedIn: 'root',
})
export class ArticleCreationService {
  constructor(
    private unterKategorieService: UnterKategorieService,
    private util: Util,
    private formRetrieval: FormRetrieval
  ) {}

  createNewArticle(artikelForm: FormGroup): Article {
    const unterkategorieID = this.getUnterkategorieID();

    return {
      artikel_id: 0,
        artikelname: this.formRetrieval.artikelnameForm(artikelForm),
      firma: this.formRetrieval.firmaForm(artikelForm),
      model: this.formRetrieval.modelForm(artikelForm),
      unterkategorie_id: unterkategorieID, // unterkategorieID should be retrieved separately
      preis: this.formRetrieval.preisForm(artikelForm),
      beschreibung: this.formRetrieval.beschreibungForm(artikelForm),
      bild_url: '',
      zustand: this.formRetrieval.zustandForm(artikelForm),
      einkaufs_datum: this.formRetrieval.einkaufsDatumForm(artikelForm),
      belegt_von: this.formRetrieval.belegtVonForm(artikelForm),
      belegt_bis: this.formRetrieval.belegtBisForm(artikelForm),
      edit_date: this.formRetrieval.editDateForm(artikelForm),
      anlagenummer: this.formRetrieval.anlagenummerForm(artikelForm),
      besitzer_id: null, // This should be set separately
      seriennummer: this.formRetrieval.seriennummerForm(artikelForm),
      assets: {
      ID: 0,
        Inventarnummer: this.formRetrieval.inventarnummerForm(artikelForm),
      },
    }






  }

  createNewProjectArticle(artikelForm: FormGroup, projectsService: any): ProjectArticle {
    const projektID = this.getProjektID(projectsService);
    const newArticle = this.createNewArticle(artikelForm);

    return {
      projekt_artikel_id: 0,
      projekt_id: projektID,
      artikel_id: 0,
      menge: this.util.getFormValueAsNumber(artikelForm.get('asset_numbers.menge')),
      artikel: newArticle,
    };
  }

  private getUnterkategorieID(): number {
    const unterkategorieID = this.unterKategorieService.selectedUnterKategorieId.getValue();
    if (!unterkategorieID) {
      throw new Error('unterkategorieID is null');
    }
    return unterkategorieID;
  }

  private getProjektID(projectsService: any): number {
    const proStr = projectsService.selectedProject.getValue();
    return parseInt(proStr);
  }
}
