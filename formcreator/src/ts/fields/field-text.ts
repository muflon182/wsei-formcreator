import FieldType from './field.enum';
import Field from './field.interface';
import FieldLabel from './field-label';

export default class TextAreaField extends FieldLabel implements Field {
	name: string;
	type: FieldType = FieldType.TextArea;
	value: string;

	constructor(name: string, label: string, value: string = '') {
		super(label);
		this.name = name;
		this.value = value;
	}

	getValue(): string {
		return this.value;
	}

	render(): HTMLDivElement {
		const fieldGroup: HTMLDivElement = document.createElement('div');
		fieldGroup.classList.add('field-group');
		fieldGroup.innerHTML = `<label for="${this.name}" class="field-label">${this.label}: </label>
        <textarea id="${this.name}" class="field-textarea">${this.value}</textarea>`;

		fieldGroup.querySelector('textarea').addEventListener('input', () => {
			this.value = fieldGroup.querySelector('textarea').value;
		});

		return fieldGroup;
	}
}
