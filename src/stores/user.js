import { writable } from 'svelte/store';

let user;

if (typeof window !== 'undefined') {
	user = JSON.parse(localStorage.getItem('user'));
}

export const userStore = writable(user);

let aff;

if (typeof window !== 'undefined') {
	aff = JSON.parse(localStorage.getItem('aff'));
}

export const affiliate = writable(aff);

export const location = writable(null);
