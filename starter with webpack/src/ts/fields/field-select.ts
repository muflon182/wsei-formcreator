import FieldType from './field.enum';
import Field from './field.interface';
import FieldLabel from './field-label';

export default class SelectField extends FieldLabel implements Field {
	name: string;
	label: string;
	type: FieldType = FieldType.Select;
	value: string[];

	constructor(name: string, label: string, value: string[]) {
		super(label);
		this.name = name;
		this.value = value;
	}

	render(): string {
		return '';
	}
}
