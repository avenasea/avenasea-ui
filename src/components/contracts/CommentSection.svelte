<script lang="ts">
	import type { Contract, Comment } from '$types/contract';
	import { formatDistance } from 'date-fns';
	import Contracts from '$api/contracts';
	import Message from '$components/Message.svelte';

	export let contractData: Contract;
	export let fieldName: string;
	export let parentID = null;
	export let level = 0;
	let comments: Comment[];
	let replyText = {};
	let showReplyInput = {};
	let showChildren = {};
	let allFieldComments: Comment[] = [];
	let type;
	let msg;

	level += 1;
	let borderColor = `rgb(${level * 30}, ${level * 30}, 210)`;

	$: {
		allFieldComments = contractData?.comments?.filter((el) => el.field == fieldName);
		comments = allFieldComments?.filter((el) => el.parentID == parentID);
	}

	const updateField = async (id) => {
		msg = null;
		type = null;
		try {
			const res = await new Contracts().createComment(contractData.id, {
				parentID: id == 1 ? null : id,
				text: replyText[id],
				fieldName
			});

			contractData.comments = [...contractData.comments, res];
			replyText[id] = '';
			showChildren[id] = true;
			showReplyInput[id] = false;
		} catch (err) {
			type = 'error';
			msg = err;
		}
	};
</script>

<section
	class:child-comment-section={level != 1}
	class="comment-section"
	style={`border-color:${borderColor};`}
>
	<Message {type} {msg} />

	{#if comments?.length > 0}
		{#each comments as comment}
			<div class="comment-container">
				<h4>
					{contractData.parties.find((el) => el.userID == comment.userID).username} - {formatDistance(
						new Date(comment.timestamp),
						new Date(),
						{
							addSuffix: true
						}
					)}
				</h4>
				<p>{comment.text}</p>
				<button
					class="text-btn"
					on:click|preventDefault={() => (showReplyInput[comment.id] = !showReplyInput[comment.id])}
					>Reply</button
				>
				{#if allFieldComments.some((c) => c.parentID == comment.id)}
					<button
						class="text-btn"
						on:click|preventDefault={() => (showChildren[comment.id] = !showChildren[comment.id])}
						>&nbsp; {showChildren[comment.id] ? `Hide` : `Show`} Replies</button
					>
				{/if}
				{#if showReplyInput[comment.id]}
					<form on:submit|preventDefault={() => updateField(comment.id)}>
						<input type="text" bind:value={replyText[comment.id]} />
						<button>Comment</button>
					</form>
				{/if}
			</div>

			<!-- recursive CommentSection when comment has children -->
			{#if showChildren[comment.id] && allFieldComments.some((c) => c.parentID == comment.id)}
				<svelte:self bind:contractData {fieldName} {level} parentID={comment.id} />
			{/if}
		{/each}
	{/if}

	<!-- show top level comment form -->
	{#if level == 1}
		<form on:submit|preventDefault={() => updateField(1)}>
			<input type="text" bind:value={replyText[1]} />
			<button>Comment</button>
		</form>
	{/if}
</section>

<style>
	.child-comment-section {
		margin-left: 0.6em !important;
		border-left: 2px solid;
	}
	.comment-section {
		padding: 0.8em 0 0.8em 0.8em;
		margin: 0.4em 0;
	}
	.comment-container {
		padding: 0.5em;
		margin: 0.3em 0;
		border: #6e89cd 0.5px solid;
		border-radius: 8px;
	}
</style>
