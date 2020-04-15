import FieldType from './field.enum';
import Field from './field.interface';
import FieldLabel from './field-label';

export default class InputField extends FieldLabel implements Field {
	name: string;
	type: FieldType = FieldType.Text;
	value: string;

	constructor(name: string, label: string, value: string = 'value') {
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
        <input type="${this.type}" name="${this.name}" id="${this.name}" class="field-input" value="${this
			.value}" required>`;

		fieldGroup.querySelector('input').addEventListener('input', () => {
			this.value = fieldGroup.querySelector('input').value;
		});

		return fieldGroup;
	}
}
