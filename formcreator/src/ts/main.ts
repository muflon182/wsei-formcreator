import './../scss/main.scss';
import Form, { createFieldsFromDoc } from './form';
import { DocumentList } from './store/document-list';
import { Router, Path } from './routing/router';
import FormCreator from './form-creator';
import FormList from './store/form-list';

export default class App {
	static showForm(doc: any, id?: string): void {
		const form: Form = new Form(createFieldsFromDoc(doc));

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

	static createFormList() {
		const listContainer: HTMLDivElement = document.querySelector('#root');

		const forms: FormList = new FormList();
		forms.getForms();

		listContainer.appendChild(forms.render());
	}
}

document.addEventListener('DOMContentLoaded', Router.useRoute);
