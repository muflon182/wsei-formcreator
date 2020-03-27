import Field from './fields/field.interface';
import InputField from './fields/field-input';
import EmailField from './fields/field-email';
import CheckboxField from './fields/field-checkbox';
import TextAreaField from './fields/field-text';
import SelectField from './fields/field-select';
import DateField from './fields/field-date';

export default class Form {
	fields: Field[] = [
		new InputField('first-name', 'Imie', 'Mateusz'),
		new InputField('last-name', 'Nazwisko', 'Mazur'),
		new EmailField('email', 'Email', 'mateuszmazur182@gmail.com'),
		new SelectField('studies', 'Kierunek studiów', [
			'Informatyka',
			'Elektronika',
			'Teleinformatyka',
			'Cyberbezpieczeństwo'
		]),
		new CheckboxField('elearning', 'Elearning', 'true'),
		new TextAreaField('comments', 'Uwagi', 'Lorem ipsum dolor sit amet')
	];

	getValue(): string[] {
		return this.fields.map((field: Field) => field.value as string);
	}
}
