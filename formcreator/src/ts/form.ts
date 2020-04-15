import Field from './fields/field.interface';
import InputField from './fields/field-input';
import EmailField from './fields/field-email';
import CheckboxField from './fields/field-checkbox';
import TextAreaField from './fields/field-text';
import SelectField from './fields/field-select';
import DateField from './fields/field-date';
import LocStorage from './store/storage';

export default class Form {
	fields: Field[] = [
		new InputField('Name', 'Enter name'),
		new InputField('Surname', 'Enter surname'),
		new EmailField('Email', 'Enter email'),
		new SelectField('Select', 'Choose option'),
		new CheckboxField('Choice', 'Agree?'),
		new TextAreaField('Text', 'Enter info')
	];

	save(): void {
		const document: any = {};
		this.fields.forEach((field, i) => {
			const temp: any = {};
			temp[field.name] = field.value;
			temp['label'] = field.label;
			document[`${field.type}-${i}`] = temp;
		});

		new LocStorage().saveDocument(document);

		window.location.href = '/index.html';
	}

	getValue(): string[] {
		return this.fields.map((field: Field) => field.value as string);
	}

	render(): HTMLDivElement {
		const container = document.createElement('div');
		container.classList.add('field-wrapper');

		this.fields.forEach((field: Field) => {
			container.appendChild(field.render());
		});
		return container;
	}
}
