import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';


interface DeliveryNoteData {
  deliveryNoteNumber: string;
  deliveryDate: string;
  sender: string;
  recipient: string;
  items: Array<{ description: string; quantity: number; unit: string }>;
}


@Component({
  selector: 'app-lieferschein',
  templateUrl: './lieferschein.component.html',
  styleUrls: ['./lieferschein.component.css']
})

export class LieferscheinComponent {



  generateDeliveryNotePdf() {


    const deliveryNoteData: DeliveryNoteData = {
      deliveryNoteNumber: '123456',
      deliveryDate: '01/02/2023',
      sender: 'Sender Company\nSender Address\nSender City, Sender ZIP',
      recipient: 'Recipient Company\nRecipient Address\nRecipient City, Recipient ZIP',
      items: [
        { description: 'Item 1', quantity: 10, unit: 'pcs' },
        { description: 'Item 2', quantity: 5, unit: 'pcs' },
        { description: 'Item 3', quantity: 2, unit: 'pcs' },
      ],
    };

    const doc = new jsPDF();

    // Titel
    doc.setFontSize(20);
    doc.text('Lieferschein', 14, 22);

    // Lieferschein-Informationen
    doc.setFontSize(14);
    doc.text(`Lieferschein-Nr: ${deliveryNoteData.deliveryNoteNumber}`, 14, 32);
    doc.text(`Lieferdatum: ${deliveryNoteData.deliveryDate}`, 14, 38);

    // Absender und Empfänger
    doc.text('Absender:', 14, 50);
    doc.text(deliveryNoteData.sender, 14, 56);
    doc.text('Empfänger:', 100, 50);
    doc.text(deliveryNoteData.recipient, 100, 56);

    // Artikel-Tabelle
    autoTable(doc, {
      startY: 80,
      head: [['Beschreibung', 'Menge', 'Einheit']],
      body: deliveryNoteData.items.map((item) => [item.description, item.quantity, item.unit]),
      styles: {
        fontSize: 14,
        cellPadding: 2,
        overflow: 'linebreak',
      },
      columnStyles: {
        0: { cellWidth: 100 },
        1: { cellWidth: 'auto' },
        2: { cellWidth: 'auto' },
      },
    });

    // PDF speichern
    doc.save('lieferschein.pdf');
  }


}

