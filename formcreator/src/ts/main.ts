import './../scss/main.scss';
import Form from './form';
import { DocumentList } from './store/document-list';

class App {
	static createForm(): void {
		console.log(window.location.pathname);
		const form: Form = new Form();
		document.querySelector('#root').appendChild(form.render());

		document.querySelector('#save-document').addEventListener('click', () => {
			form.save();
		});
	}

	static createDocumentList() {
		const listContainer: HTMLDivElement = document.querySelector('#root');

		const documents: DocumentList = new DocumentList();
		documents.getDocuments();

		listContainer.innerHTML = '';
		listContainer.appendChild(documents.render());
	}
}

document.addEventListener('DOMContentLoaded', () => {
	switch (window.location.pathname) {
		case '/new-document.html':
			App.createForm();
			break;
		case '/document-list.html':
			App.createDocumentList();
			break;
		default:
			throw Error('Wrong endpoint!');
	}
});
