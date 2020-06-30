import App from '../main';
import Form from '../form';
import { DocumentList } from '../store/document-list';
import FormList from '../store/form-list';

export enum Path {
	Index = '/index.html',
	NewDocument = '/new-document.html',
	EditDocument = '/edit-document.html',
	DocumentList = '/document-list.html',
	CreateForm = '/new-form.html',
	FormList = '/form-list.html'
}

export class Router {
	static getParam(): string {
		const query: string = window.location.search.substr(1);
		const urlParams: URLSearchParams = new URLSearchParams(query);
		const id: string = urlParams.get('id');
		return id;
	}

	static getPath(): string {
		return window.location.pathname;
	}

	static setPath(route: Path): void {
		window.location.href = route;
	}

	static useRoute() {
		switch (Router.getPath()) {
			case Path.NewDocument:
				const formID = Router.getParam();
				const form: any = new FormList().getForm(formID);
				App.showForm(form);
				break;
			case Path.EditDocument:
				const docID = Router.getParam();
				const doc: any = new DocumentList().getDocument(docID);
				App.showForm(doc, docID);
				break;
			case Path.DocumentList:
				App.createDocumentList();
				break;
			case Path.CreateForm:
				App.buildForm();
				break;
			case Path.FormList:
				App.createFormList();
				break;
			case Path.Index:
				break;
			default:
				throw Error('Wrong endpoint!');
		}
	}
}
