import FieldType from './field.enum';
import Field from './field.interface';
import FieldLabel from './field-label';

export default class CheckboxField extends FieldLabel implements Field {
	name: string;
	type: FieldType = FieldType.Checkbox;
	value: string;

	constructor(name: string, label: string, value: string = 'unselected') {
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

		fieldGroup.innerHTML = `<label for="${this.name}" class="field-label" >${this.label}</label><input type="${this
			.type}" name="${this.name}" id="${this.name}" class="field-checkbox" value="${this.value}">`;

		const checkbox: HTMLInputElement = fieldGroup.querySelector('input');
		checkbox.addEventListener('input', () => {
			if (checkbox.checked) {
				this.value = 'selected';
			} else {
				this.value = 'unselected';
			}
		});

		return fieldGroup;
	}
}
