import FieldType from './field.enum';
import Field from './field.interface';
import FieldLabel from './field-label';

export default class InputField extends FieldLabel implements Field {
	name: string;
	label: string;
	type: FieldType = FieldType.Text;
	value: string;

	constructor(name: string, label: string, value: string) {
		super(label);
		this.name = name;
		this.value = value;
    }
    
    getValue(): string {
		return this.value;
	}

	render(): string {
		return `<p><label for="${this.name}">${this.label}</label>
        <input type="${this.type}" name="${this.name}" id="${this.name}" value="${this.value}" required></p>`;
	}
}
