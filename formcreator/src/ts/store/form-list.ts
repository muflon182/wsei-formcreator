import LocStorage from './storage';

export default class FormList {
	forms: any;
	storage: LocStorage;

	constructor() {
		this.storage = new LocStorage();
	}

	getForm(id: string): any {
		return this.storage.loadForm(id);
	}

	getForms(): void {
		this.forms = this.storage.getForms();
	}

	render(): HTMLUListElement {
		const list: HTMLUListElement = document.createElement('ul');
		list.classList.add('list');

		Object.keys(this.forms).forEach((id) => {
			const item: HTMLLIElement = document.createElement('li');
			item.classList.add('list-item');

			const formName: HTMLParagraphElement = document.createElement('p');
			formName.classList.add('list-item-id');
			formName.textContent = `Form ID: ${id}`;

			const createDocument: HTMLAnchorElement = document.createElement('a');
			createDocument.setAttribute('href', `/new-document.html?id=${id}`);
			createDocument.classList.add('list-item-use');
			createDocument.textContent = 'Create document using this form';

			item.appendChild(formName);
			item.appendChild(createDocument);

			list.appendChild(item);
		});
		return list;
	}
}
