import request from 'node-superfetch';

class TextGen {

	async fact() {
		const { body } = await request.get('https://bruhapi.xyz/fact');

		const text = body.res;

		return text;
	}
}

export default TextGen;