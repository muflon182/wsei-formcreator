import DataStorage from './storage.interface';

export default class LocStorage implements DataStorage {
	saveDocument(document: any): string {
		const ID: string = `${Date.now()}`
		localStorage.setItem(`document-${ID}`, JSON.stringify(document));
		return `document-${ID}`;
	}

	loadDocument(ID: string): any {
		return JSON.parse(localStorage.getItem(ID));
	}

	getDocuments(): string[] {
        const result: string[] = [];
        Object.keys(localStorage).forEach((key) => result.push(JSON.parse(localStorage.getItem(key))));
        return result;
	}
}
