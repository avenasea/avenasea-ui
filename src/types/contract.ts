type DbID = string;
type FieldKey = string;

export interface Contract {
	name: string;
	parties: {
		userID: DbID;
		creator: boolean;
	}[];
	JSONschema: Record<any, any>;
	currentData: Record<FieldKey, any>;
	changeHistory?: Record<
		FieldKey,
		{
			timestamp: Date;
			userID: DbID;
			changedFrom: string;
			changedTo: string;
		}[]
	>;
	comments?: Record<FieldKey, { text: string; timestamp: Date; userID: string }[]>;
	id?: string;
}
