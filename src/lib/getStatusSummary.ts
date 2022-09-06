import type { Contract, ContractField } from '$types/contract';
import { userStore } from '$stores/user';
import { get } from 'svelte/store';

export const getStatusSummary = (field: ContractField, parties: Contract['parties']) => {
	let statusSummary: ContractField['statusSummary'] = 'unset';
	if (!field.currentValue) {
		statusSummary = 'unset';
	} else if (
		Object.entries(field.approvalStatus).some(
			([key, val]: any) => val.choice === 'rejected' && key != get(userStore).id
		)
	) {
		statusSummary = 'rejectedByOther';
	} else if (
		Object.values(field.approvalStatus).filter((v: any) => v.choice == 'approved').length ==
		parties.length
	) {
		statusSummary = 'fullyApproved';
	} else if (field.approvalStatus[get(userStore).id]?.choice == 'approved') {
		statusSummary = 'awaitingOther';
	} else if (field.approvalStatus[get(userStore).id]?.choice == 'rejected') {
		statusSummary = 'rejectedByMe';
	} else {
		statusSummary = 'awaitingMe';
	}
	return statusSummary;
};
