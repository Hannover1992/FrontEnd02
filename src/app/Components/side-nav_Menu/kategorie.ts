export interface Kategorie {
  kategorie_id: number;
  kategoriename: string;
  subkategorien: Subkategorie[];
}

interface Subkategorie {
  unterkategorie_id: number;
  unterkategoriename: string;
  kategorie_id: number;
}
