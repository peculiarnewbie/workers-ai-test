<script lang="ts">
	let promptResponse = $state("");

	const onPrompt = async (e: Event) => {
		const formData = new FormData(e.target as HTMLFormElement);
		const prompt = formData.get("prompt");
		const model = formData.get("model");
		console.log(prompt);

		const response = await fetch("/api/prompt", {
			method: "POST",
			body: JSON.stringify({
				prompt: prompt,
				model: model,
			}),
		});

		const res = await response.json();
		console.log(res);
		promptResponse = res.response;
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<form onsubmit={onPrompt}>
	<label for="model">Model</label>
	<input style="width: 90vw;" name="model" type="text" />
	<label for="prompt">Prompt</label>
	<input style="width: 90vw;" name="prompt" type="text" />
	<button type="submit">send</button>
</form>

<p>{promptResponse}</p>
