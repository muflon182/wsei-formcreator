import InputField from './fields/field-input';
import SelectField from './fields/field-select';

import LocStorage from './store/storage';

import FieldType from './fields/field.enum';

export default class FormCreator {
	fields: any = [];

	addFormField(): void {
		this.fields.push([
			new SelectField('field-type', 'Choose field', 'text', Object.values(FieldType).map((type: string) => type)),
			new InputField('field-name', 'Enter field name'),
			new InputField('field-label', 'Enter label text'),
			new InputField('field-value', 'Set default value (optional)')
		]);
	}

	saveForm() {
		const document: any = {};
		this.fields.forEach((fieldset: any, i: number) => {
			const obj: any = {};

			let fieldType: string;
			let fieldName: string;
			let fieldLabel: string;
			fieldset.forEach((field: any, i: number) => {
				switch (i) {
					case 0:
						fieldType = field.getValue();
						break;
					case 1:
						fieldName = field.getValue();
						break;
					case 2:
						fieldLabel = field.getValue();
						break;
					case 3:
						obj[fieldName] = field.getValue();
						break;
				}
			});
			obj['label'] = fieldLabel;
			document[`${fieldType}-${i + 1}`] = obj;
		});
		const storage = new LocStorage();
		storage.saveForm(document);
	}

	render(): HTMLDivElement {
		const fieldContainer: HTMLDivElement = document.createElement('div');
		fieldContainer.classList.add('field-wrapper');
		this.fields[this.fields.length - 1].forEach((field: any) => {
			fieldContainer.appendChild(field.render());
		});
		return fieldContainer;
	}
}
