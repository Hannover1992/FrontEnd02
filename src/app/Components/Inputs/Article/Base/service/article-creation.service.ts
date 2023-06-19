import {Injectable} from "@angular/core";
import {UnterKategorieService} from "../../../../Services/unter-kategorie.service";
import {FormGroup} from "@angular/forms";
import {Article} from "../../../../Interface/article";
import {ProjectArticle} from "../../../../Interface/projectArticle";
import {FormRetrievalService} from "../../Specialization/asset/services/form-retrieval.service";
// import {Util} from "../../Specialization/asset/services/util.service";


@Injectable({
  providedIn: 'root',
})

export abstract class ArticleCreationService {
  constructor(
    private unterKategorieService: UnterKategorieService,
    // private util: Util,
    private formRetrievalService: FormRetrievalService
  ) {}

  createNewArticle(artikelForm: FormGroup): Article {
    const unterkategorieID = this.getUnterkategorieID();

    let nerArticle: Article = {
      artikel_id:         0,
      artikelname:        this.formRetrievalService.artikelnameForm(artikelForm),
      firma:              this.formRetrievalService.firmaForm(artikelForm),
      model:              this.formRetrievalService.modelForm(artikelForm),
      unterkategorie_id:  unterkategorieID, // unterkategorieID should be retrieved separately
      preis:              this.formRetrievalService.preisForm(artikelForm),
      beschreibung:       this.formRetrievalService.beschreibungForm(artikelForm),
      bild_url:           '',
      zustand:            this.formRetrievalService.zustandForm(artikelForm),
      einkaufs_datum:     this.formRetrievalService.einkaufsDatumForm(artikelForm),
      belegt_von:         this.formRetrievalService.belegtVonForm(artikelForm),
      belegt_bis:         this.formRetrievalService.belegtBisForm(artikelForm),
      edit_date:          this.formRetrievalService.editDateForm(artikelForm),
      anlagenummer:       this.formRetrievalService.anlagenummerForm(artikelForm),
      besitzer_id:        null, // This should be set separately
      seriennummer:       this.formRetrievalService.seriennummerForm(artikelForm),
    }

    return this.erweitere_es_um_electronics(artikelForm, nerArticle);
  }

  abstract erweitere_es_um_electronics(artikelForm: FormGroup, nerArticle: Article) : Article;

  create(artikelForm: FormGroup, projectsService: any): ProjectArticle {
    const projektID : number  = this.getProjektID(projectsService);
    const newArticle: Article = this.createNewArticle(artikelForm);

    return {
      projekt_artikel_id: 0,
      projekt_id:         projektID,
      artikel_id:         0,
      menge:              this.formRetrievalService.mengeForm(artikelForm),
      artikel:            newArticle,
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
