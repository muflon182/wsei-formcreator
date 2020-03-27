import FieldType from './field.enum';
import Field from './field.interface';

import FieldLabel from './field-label';

export default class DateField extends FieldLabel implements Field {
	name: string;
	label: string;
	type: FieldType = FieldType.Date;
	value: string;

	constructor(name: string, label: string, value: string) {
		super(label);
		this.name = name;
		this.value = value;
	}

	render(): string {
		return '';
	}
}
