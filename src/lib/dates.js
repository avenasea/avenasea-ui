import { formatDistance } from 'date-fns';

export const fromNow = (str) => {
	return formatDistance(new Date(str), new Date(), { addSuffix: true });
};
