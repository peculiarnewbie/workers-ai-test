import { Ai } from "@cloudflare/ai";
import { json } from "@sveltejs/kit";

export async function POST({ request, platform }) {
	let aiFunction = new Ai(platform?.env.AI);

	const prompt: string = (await request.json()).prompt;

	const response = await aiFunction.run(
		"@cf/mistral/mistral-7b-instruct-v0.1",
		{
			prompt: prompt,
		}
	);

	// return new Response(JSON.stringify(response));
	return json(response);
}
