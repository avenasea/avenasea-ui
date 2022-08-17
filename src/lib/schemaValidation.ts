import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true, strictSchema: false });
addFormats(ajv);

export default (schema: Record<string, any>, value: any) => {
	let error: string | undefined;
	try {
		const validate = ajv.compile(schema);
		validate(value);

		error = validate?.errors?.[0]?.message;
	} catch (err) {
		error = err.message;
	}
	return typeof error === 'undefined' ? true : error;
};
