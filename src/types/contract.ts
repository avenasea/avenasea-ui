type DbID = string;
type FieldKey = string;
type UUID = string;

export interface Comment {
	id: UUID;
	parentID: UUID | null;
	text: string;
	timestamp: Date;
	userID: UUID;
	field: FieldKey;
}

export interface ChangeHistory {
	timestamp: Date;
	userID: UUID;
	changedFrom: string;
	changedTo: string;
}

export interface Contract {
	name: string;
	createdAt: string;
	parties: {
		userID: DbID;
		creator: boolean;
		fieldsApproved: {
			[key: FieldKey]: {
				choice: 'approved' | 'rejected';
			};
		};
		username?: string;
	}[];
	JSONschema: Record<any, any>;
	currentData: Record<FieldKey, any>;
	changeHistory?: {
		[key: FieldKey]: ChangeHistory[];
	};
	comments?: Comment[];
	id?: string;
}
