import DataStorage from './storage.interface';

export default class LocStorage implements DataStorage {
	saveDocument(document: any, id?: string): string {
		if (id !== undefined) {
			localStorage.setItem(id, JSON.stringify(document));
			return `formcreator-document-${id}`;
		}

		const newID: string = `${Date.now()}`;
		localStorage.setItem(`formcreator-document-${newID}`, JSON.stringify(document));
		return `formcreator-document-${newID}`;
	}

	loadDocument(ID: string): any {
		return JSON.parse(localStorage.getItem(ID));
	}

	removeDocument(ID: string): void {
		localStorage.removeItem(ID);
	}

	getDocuments(): any[] {
		const documents: any = {};

		Object.keys(localStorage).forEach((id: string) => {
			if (id.includes('formcreator-document')) {
				documents[id] = JSON.parse(localStorage.getItem(id));
			}
		});

		return documents;
	}

	saveForm(form: any): string {
		const id: string = Date.now().toString();
		localStorage.setItem(`formcreator-form-${id}`, JSON.stringify(form));
		return `formcreator-form-${id}`;
	}
}
