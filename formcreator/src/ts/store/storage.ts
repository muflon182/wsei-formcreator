import DataStorage from './storage.interface';

export default class LocStorage implements DataStorage {
	saveDocument(document: any): string {
		const ID: string = `${Date.now()}`;
		localStorage.setItem(`formcreator-document-${ID}`, JSON.stringify(document));
		return `formcreator-document-${ID}`;
	}

	loadDocument(ID: string): any {
		return JSON.parse(localStorage.getItem(ID));
	}

	getDocuments(): any[] {
		const documents: any = {};

		Object.keys(localStorage).forEach((id: string) => {
			if (!id.includes('formcreator-')) {
				return;
			}

			documents[id] = JSON.parse(localStorage.getItem(id));
		});

		return documents;
	}
}
