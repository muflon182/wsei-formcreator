import LocStorage from './storage';

export class DocumentList extends LocStorage {
	documents: any[];

	getDocumentList() {
		this.documents = this.getDocuments();
	}
}
