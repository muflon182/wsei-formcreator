import App from '../main';

export enum Path {
	Index = '/index.html',
	NewDocument = '/new-document.html',
	EditDocument = '/edit-document.html',
	DocumentList = '/document-list.html',
	CreateForm = '/new-form.html'
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
				App.createForm();
				break;
			case Path.EditDocument:
				const id = Router.getParam();
				App.editDocument(id);
				break;
			case Path.DocumentList:
				App.createDocumentList();
				break;
			case Path.Index:
				break;
			case Path.CreateForm:
				App.buildForm();
				break;
			default:
				throw Error('Wrong endpoint!');
		}
	}
}
