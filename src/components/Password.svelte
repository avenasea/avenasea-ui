<script lang="ts">
	export let finalPassword = '';
	export let changePassword = false;
	let password = '';
	let confirmPassword = '';
	let timeouts = {};
	let errors = [];
	let match = true;
	const passwordRules = {
		minLength: 8,
		minDigits: 1,
		minLowerLetters: 1
	};

	const validatePassword = (dontUpdate?: boolean) => {
		const tempErrors = [];

		if (password.length < passwordRules.minLength) {
			tempErrors.push('minLength');
		}

		if (
			(passwordRules.minLowerLetters !== 0 && password.match(/[a-z]/g) == null) ||
			password.match(/[a-z]/g).length < passwordRules.minLowerLetters
		) {
			tempErrors.push('minLowerLetters');
		}

		if (
			(passwordRules.minDigits !== 0 && password.match(/\d/g) == null) ||
			password.match(/\d/g).length < passwordRules.minDigits
		) {
			tempErrors.push('minDigits');
		}
		if (!dontUpdate) errors = tempErrors;
		return tempErrors.length == 0;
	};

	const handleKeyup = (field) => {
		clearTimeout(timeouts[field]);

		if (field == 'confirm') {
			if (!match) {
				checkMatch();
			} else {
				timeouts[field] = setTimeout(() => checkMatch(), 1000);
			}
		} else {
			if (errors.length > 0) {
				validatePassword();
			} else {
				timeouts[field] = setTimeout(() => validatePassword(), 1000);
			}
		}
	};

	const handleBlur = () => {
		validatePassword();
		if (confirmPassword.length > 0) {
			checkMatch();
		}
	};

	const checkMatch = () => {
		match = password == confirmPassword;
		return match;
	};

	$: {
		finalPassword = '';
		if (password == confirmPassword && validatePassword(true)) finalPassword = password;
	}
</script>

<div class="field">
	<label for="password">{changePassword ? 'Change Password:' : 'Password:'}</label>
	<input
		type="password"
		id="password"
		bind:value={password}
		on:keyup={() => handleKeyup('password')}
		on:blur={handleBlur}
	/>
	<span class="rule" class:rule-error={errors.includes('minLength')}
		>{passwordRules.minLength !== 0
			? `Cannot be less than ${passwordRules.minLength} characters`
			: ''}</span
	>
	<span class="rule" class:rule-error={errors.includes('minLowerLetters')}
		>{passwordRules.minLowerLetters !== 0
			? `Must contain at least ${passwordRules.minLowerLetters} lower case letter ${
					passwordRules.minLowerLetters > 1 ? 's' : ''
			  }`
			: ''}</span
	>
	<span class="rule" class:rule-error={errors.includes('minDigits')}
		>{passwordRules.minDigits !== 0
			? `Must contain at least ${passwordRules.minDigits} number${
					passwordRules.minDigits > 1 ? 's' : ''
			  }`
			: ''}</span
	>
</div>
<div class="field">
	<label for="password">{changePassword ? 'Confirm New Password:' : 'Confirm Password:'}</label>
	<input
		type="password"
		id="confirmPassword"
		bind:value={confirmPassword}
		on:keyup={() => handleKeyup('confirm')}
		on:blur={handleBlur}
	/>
	{#if !match}
		<p class="rule-error">passwords do not match</p>
	{/if}
</div>

<style>
	.rule {
		display: block;
	}
	.rule-error {
		background-color: #ffb0b0;
		color: #8f0000;
		padding: 0.5rem 0.8rem;
		border-radius: 0.8rem;
	}
</style>
