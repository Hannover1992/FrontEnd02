import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-urlaubs-antrag',
  templateUrl: './urlaubs-antrag.component.html',
  styleUrls: ['./urlaubs-antrag.component.css']
})
export class UrlaubsAntragComponent {





  async generatePdf(name: string, vorname: string, start: string, end: string, restUrlaubVorjahr: string, urlaubsanspruch: string, gewaehrterUrlaub: string, beantragterUrlaub: string, restUrlaub: string, vertretung: string) {
    const doc = new jsPDF();

    // Titel
    doc.setFontSize(20);
    doc.text('Urlaubsantrag', 14, 22);

    // Tabelle
    autoTable(doc, {
      startY: 30,
      head: [['', '']],
      body: [
        ['Name:', name],
        ['Vorname:', vorname],
        ['Erster Urlaubstag:', start],
        ['Letzter Urlaubstag:', end],
        ['Resturlaub aus Vorjahr:', Number(restUrlaubVorjahr).toString()],
        ['Urlaubsanspruch im laufenden Jahr:', Number(urlaubsanspruch).toString()],
        ['Gewährter Urlaub im laufenden Jahr:', Number(gewaehrterUrlaub).toString()],
        ['Jetzt beantragter Urlaub:', Number(beantragterUrlaub).toString()],
        ['Voraussichtlicher Resturlaub:', Number(restUrlaub).toString()],
        ['Meine Vertretung waehrend des Urlaub ubernimmt Frau/Herr:', vertretung]
      ],
      styles: {
        fontSize: 14,
        cellPadding: 2,
        overflow: 'linebreak',
      },
      columnStyles: {
        0: {cellWidth: 120},
      },
    });
    // Unterschriften hinzufügen
    await this.addSignature(doc);
    await this.addCPC(doc);
    doc.text('Unterschrift Arbeitnehmer(in):', 14, 185);

    // Aktuelles Datum hinzufügen
    const date = new Date();
    const dateStr = date.toLocaleDateString();
    doc.text(dateStr, 14, 195);

    // Genehmigungstext hinzufügen
    doc.text('Urlaub genehmigt:', 120, 185);

    // PDF speichern
    doc.save('urlaubsantrag.pdf');
  }

  async addCPC(doc: jsPDF) {
    const signatureImgPath = 'assets/cpc_signature.png';
    const imgData = await this.loadImage(signatureImgPath);
    doc.addImage(imgData, 'PNG', 150, 2, 50, 25);

  }



  async addSignature(doc: jsPDF) {
    const signatureImgPath = 'assets/unterschrift.png';
    const imgData = await this.loadImage(signatureImgPath);
    doc.addImage(imgData, 'PNG', 14, 150, 50, 25);
  }


  async loadImage(url: string): Promise<string> {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx!.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = url;
    });
  }
}
