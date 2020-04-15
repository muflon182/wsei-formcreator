import FieldType from './field.enum';
import Field from './field.interface';
import FieldLabel from './field-label';

export default class SelectField extends FieldLabel implements Field {
	name: string;
	type: FieldType = FieldType.Select;
	value: string;
	options: string[];

	constructor(
		name: string,
		label: string,
		value: string = '',
		options: string[] = [ 'Option 1', 'Option 2', 'Option 3', 'Option 4' ]
	) {
		super(label);
		this.name = name;
		this.value = value;
		this.options = options;
	}

	getValue(): string {
		return this.value;
	}

	render(): HTMLDivElement {
		const fieldGroup: HTMLDivElement = document.createElement('div');
		fieldGroup.classList.add('field-group');

		const label: HTMLLabelElement = document.createElement('label');
		label.classList.add('field-label');
		label.setAttribute('for', `${this.name}`);
		label.textContent = `${this.label}: `;

		const select: HTMLSelectElement = document.createElement('select');
		select.classList.add('field-select');
		select.setAttribute('id', `${this.name}`);

		this.options.forEach((value: string, key: number) => {
			const option: HTMLOptionElement = document.createElement('option');
			option.setAttribute('value', `${key + 1}`);
			option.textContent = value;
			select.appendChild(option);
		});

		select.addEventListener('change', () => {
			this.value = select.options[select.selectedIndex].textContent;
		});

		fieldGroup.appendChild(label);
		fieldGroup.appendChild(select);

		return fieldGroup;
	}
}
