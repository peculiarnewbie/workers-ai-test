import { Ai } from "@cloudflare/ai";
import { json } from "@sveltejs/kit";

export async function POST({ request, platform }) {
	let aiFunction = new Ai(platform?.env.AI);

	const requestData = await request.json();

	const prompt: string = requestData.prompt;
	const model: string = requestData.model;

	const response = await aiFunction.run("@hf/thebloke/llama-2-13b-chat-awq", {
		prompt: prompt,
	});

	// return new Response(JSON.stringify(response));
	return json(response);
}
