import Field from './fields/field.interface';
import InputField from './fields/field-input';
import EmailField from './fields/field-email';
import CheckboxField from './fields/field-checkbox';
import TextAreaField from './fields/field-text';
import SelectField from './fields/field-select';
import DateField from './fields/field-date';
import LocStorage from './store/storage';
import FieldType from './fields/field.enum';

const sampleFields: Field[] = [
	new InputField('Name', 'Enter name'),
	new InputField('Surname', 'Enter surname'),
	new EmailField('Email', 'Enter email'),
	new SelectField('Select', 'Choose option'),
	new CheckboxField('Choice', 'Agree?'),
	new TextAreaField('Text', 'Enter info')
];

export default class Form {
	fields: Field[];

	constructor(fields = sampleFields) {
		this.fields = fields;
	}

	save(id?: string): void {
		const document: any = {};
		this.fields.forEach((field, i) => {
			const temp: any = {};
			temp[field.name] = field.value;
			temp['label'] = field.label;
			document[`${field.type}-${i}`] = temp;
		});

		if (id !== undefined) {
			new LocStorage().saveDocument(document, id);
			return;
		}

		new LocStorage().saveDocument(document);
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

export function createFieldsFromDoc(doc: any): Field[] {
	const fields: Field[] = [];
	Object.entries(doc).forEach(([ fieldType, field ]) => {
		const [ name, value ] = Object.entries(field)[0];
		const label = Object.values(field)[1];

		switch (fieldType.slice(0, fieldType.indexOf('-'))) {
			case FieldType.Text:
				fields.push(new InputField(name, label, value));
				break;
			case FieldType.Email:
				fields.push(new EmailField(name, label, value));
				break;
			case FieldType.Date:
				fields.push(new DateField(name, label, value));
				break;
			case FieldType.Select:
				fields.push(new SelectField(name, label, value));
				break;
			case FieldType.Checkbox:
				fields.push(new CheckboxField(name, label, value));
				break;
			case FieldType.TextArea:
				fields.push(new TextAreaField(name, label, value));
				break;
			default:
				throw new Error('Wrong field type!');
		}
	});
	return fields;
}
