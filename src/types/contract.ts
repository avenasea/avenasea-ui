type DbID = string;
type FieldKey = string;

export interface Contract {
	name: string;
	createdAt: string;
	parties: {
		userID: DbID;
		creator: boolean;
	}[];
	JSONschema: Record<any, any>;
	currentData: Record<FieldKey, any>;
	changeHistory?: {
		[key: FieldKey]: Array<{
			timestamp: string;
			userID: DbID;
			changedFrom: string;
			changedTo: string;
		}>;
	};
	comments?: Record<FieldKey, { text: string; timestamp: Date; userID: string }[]>;
	id?: string;
}
