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

export interface ContractField {
	fieldName: FieldKey;
	schemaData: Record<any, any>;
	currentValue: string | Date | number | null;
	changeHistory: ChangeHistory[] | [];
	comments: Comment[] | [];
	statusSummary:
		| 'fullyApproved'
		| 'awaitingMe'
		| 'awaitingOther'
		| 'rejectedByMe'
		| 'rejectedByOther'
		| 'unset';
	approvalStatus:
		| {
				userID: UUID;
				choice: 'approved' | 'rejected';
		  }[]
		| Record<string, unknown>;
}

export class Contract {
	constructor(
		public id: UUID,
		public name: string,
		public created_at: Date,
		public parties: {
			userID: UUID;
			creator: boolean;
			username?: string;
		}[],
		public fields: ContractField[]
	) {}
}
