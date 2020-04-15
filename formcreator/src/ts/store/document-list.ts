import LocStorage from './storage';

export class DocumentList {
	documents: any[];
	storage: LocStorage;

	constructor() {
		this.storage = new LocStorage();
	}

	getDocuments(): void {
		this.documents = this.storage.getDocuments();
	}

	removeDocument(id: string): void {
		console.log('dupa');
	}

	render(): HTMLUListElement {
		const list: HTMLUListElement = document.createElement('ul');
		list.classList.add('list');
		Object.keys(this.documents).forEach((id) => {
			const item: HTMLLIElement = document.createElement('li');
			item.classList.add('list-item');

			const documentName: HTMLParagraphElement = document.createElement('p');
			documentName.classList.add('list-item-id');
			documentName.innerText = `Document ID: ${id}`;

			item.appendChild(documentName);

			list.appendChild(item);
		});

		return list;
	}
}
