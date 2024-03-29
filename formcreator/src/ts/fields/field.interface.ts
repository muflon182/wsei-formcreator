import FieldType from './field.enum';

export default interface Field {
	name: string;
	label: string;
	type: FieldType;
	value: string;
	options?: string[];
	render: () => HTMLDivElement;
	getValue: () => string;
};
