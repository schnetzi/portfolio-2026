export const toMonthAndYear = (value: string) => {
	if (!value) {
		return '';
	}

	const dateOnly = value.split(' ')[0];

	if (!dateOnly) {
		return '';
	}

	const parts = dateOnly.split('-');

	if (parts.length < 2) return value;

	const year = parts[0];
	const month = parts[1];

	return `${month}/${year}`;
};
