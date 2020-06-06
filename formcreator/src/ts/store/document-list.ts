import LocStorage from './storage';
import App from '../main';

export class DocumentList {
	documents: any[];
	storage: LocStorage;

	constructor() {
		this.storage = new LocStorage();
	}

	getDocument(id: string): any {
		return this.storage.loadDocument(id);
	}

	getDocuments(): void {
		this.documents = this.storage.getDocuments();
	}

	removeDocument(id: string): void {
		this.storage.removeDocument(id);
		App.createDocumentList();
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

			const edit: HTMLAnchorElement = document.createElement('a');
			edit.setAttribute('href', `/edit-document.html?id=${id}`);
			edit.classList.add('list-item-use');
			edit.textContent = 'Edit document';

			const removeDocBtn: HTMLButtonElement = document.createElement('button');
			removeDocBtn.classList.add('list-item-remove');
			removeDocBtn.textContent = 'Delete document';

			removeDocBtn.addEventListener('click', () => {
				if (confirm('Are you sure you want to remove this document?')) {
					this.removeDocument(id);
				}
			});

			item.appendChild(documentName);
			item.appendChild(edit);
			item.appendChild(removeDocBtn);

			list.appendChild(item);
		});

		return list;
	}
}
