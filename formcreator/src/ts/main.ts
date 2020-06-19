import './../scss/main.scss';
import Form, { createFieldsFromDoc } from './form';
import { DocumentList } from './store/document-list';
import { Router, Path } from './routing/router';
import FormCreator from './form-creator';

export default class App {
	static createForm(doc?: any, id?: string): void {
		let form: Form;
		if (doc !== undefined) {
			form = new Form(createFieldsFromDoc(doc));
		} else {
			form = new Form();
		}

		document.querySelector('#root').appendChild(form.render());

		document.querySelector('#save-document').addEventListener('click', () => {
			if (id !== undefined) {
				form.save(id);
				Router.setPath(Path.DocumentList);
			} else {
				form.save();
				Router.setPath(Path.Index);
			}
		});
	}

	static createDocumentList() {
		const listContainer: HTMLDivElement = document.querySelector('#root');

		const documents: DocumentList = new DocumentList();
		documents.getDocuments();

		listContainer.innerHTML = '';
		listContainer.appendChild(documents.render());
	}

	static editDocument(id: string) {
		const document: any = new DocumentList().getDocument(id);
		App.createForm(document, id);
	}

	static buildForm() {
		const root: HTMLDivElement = document.querySelector('#root');
		const addFieldBtn: HTMLButtonElement = document.querySelector('#add-field');
		const saveFormBtn: HTMLButtonElement = document.querySelector('#save-form');

		addFieldBtn.addEventListener('click', function() {
			formCreator.addFormField();
			root.append(formCreator.render());
		});

		const formCreator: FormCreator = new FormCreator();

		saveFormBtn.addEventListener('click', () => {
			formCreator.saveForm();
			Router.setPath(Path.Index);
		});
	}
}

document.addEventListener('DOMContentLoaded', Router.useRoute);
