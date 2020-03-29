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
        let result = `<p><label for="${this.name}">${this.label}</label><select id="${this.name}" id="${this.name}">`

        this.value.forEach(value => result += `<option value="${this.value}">${this.value} stacjonarne</option>`)

        result += `</select></p>`;
        
        return result;
	}
}
