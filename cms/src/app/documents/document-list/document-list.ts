import { Component, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList {
  documents: Document[] = [
    new Document(0, 'document1', 'Test document 1', 'example.com/test1', null),
    new Document(1, 'document2', 'Test document 2', 'example.com/test2', null),
    new Document(2, 'document3', 'Test document 3', 'example.com/test3', null),
    new Document(3, 'document4', 'Test document 4', 'example.com/test4', null)
  ];

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
