import { Ai } from "@cloudflare/ai";
import { json } from "@sveltejs/kit";

export async function POST({ request, platform }) {
	let aiFunction = new Ai(platform?.env.AI);

	const requestData = await request.json();

	const prompt: string = requestData.prompt;
	const model: string = requestData.model;

	//@ts-expect-error
	const response = await aiFunction.run(model, {
		prompt: prompt,
	});

	// return new Response(JSON.stringify(response));
	return json(response);
}
