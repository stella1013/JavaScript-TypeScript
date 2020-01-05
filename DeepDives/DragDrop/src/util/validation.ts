    
export interface Validateable {
	value: string | number;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	minValue?: number;
	maxValue?: number;
}
export function validate(rules: Validateable): boolean {
	let isValid = true;
	if (rules.required) {
		isValid = isValid && rules.required && rules.value.toString().trim().length !== 0;
	}
	if (rules.minLength != null && typeof rules.value === 'string') {
		isValid = isValid && rules.value.trim().length >= rules.minLength;
	}
	if (rules.maxLength && typeof rules.value === 'string') {
		isValid = isValid && rules.value.trim().length <= rules.maxLength;
	}
	if (rules.minValue != null && typeof rules.value === 'number') {
		isValid = isValid && rules.value >= rules.minValue;
	}
	if (rules.maxValue != null && typeof rules.value === 'number') {
		isValid = isValid && rules.value <= rules.maxValue;
	}
	return isValid;
}

