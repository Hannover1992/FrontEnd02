import {Subcategory} from "./Subcategory";

export interface Kategorie {
  kategorie_id: number;
  kategoriename: string;
  subkategorien: Subcategory[];
}

