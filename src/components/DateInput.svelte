<script lang="ts">
	import { DateInput } from 'date-picker-svelte';

	export let value: Date | null | undefined = undefined;
	export let min: Date | undefined = undefined;
	export let max: Date | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let valid: boolean | undefined = undefined;
	export let format: string | undefined = undefined;

	export let dateString;

	$: dateString = value?.toISOString().split('T')[0];
</script>

<!-- wrap component to replace rem with em fixing font-size issue -->

<DateInput bind:value {min} {max} {placeholder} {valid} {format} />

<style>
	:global(:root) {
		--date-picker-background: #1b1e27;
		--date-picker-foreground: #f7f7f7;
	}
	:global(.date-time-picker) {
		padding: 0.5em !important;
		font-size: 0.75em !important;
	}
	:global(.date-time-picker .top) {
		padding-bottom: 0.5em !important;
	}
	:global(.date-time-picker .dropdown) {
		margin-left: 0.25em !important;
		margin-right: 0.25em !important;
	}
	:global(.date-time-picker .dropdown svg) {
		padding: 0em 0.5em !important;
	}
	:global(.date-time-picker .page-button) {
		width: 1.5em !important;
		height: 1.5em !important;
	}
	:global(.date-time-picker .page-button svg) {
		width: 0.68em !important;
		height: 0.68em !important;
	}
	:global(.date-time-picker select) {
		padding: 0em 0.35em !important;
		height: 1.5em !important;
		padding-right: 1.3em !important;
	}
	:global(.date-time-picker .header-cell) {
		width: 1.875em !important;
	}
	:global(.date-time-picker .cell) {
		width: 2em !important;
		height: 1.94em !important;
	}
</style>
