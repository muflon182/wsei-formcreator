import Form from './form';

class App {
	static createForm(): void {
		document.querySelector('#root').innerHTML = new Form().render();
	}
}

document.addEventListener('DOMContentLoaded', App.createForm);
