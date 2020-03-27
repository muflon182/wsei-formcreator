import FieldType from './field.enum';
import Field from './field.interface';
import FieldLabel from './field-label';

export default class EmailField extends FieldLabel implements Field {
	name: string;
	label: string;
	type: FieldType = FieldType.Email;
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
