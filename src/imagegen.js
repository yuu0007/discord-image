const request = require('node-superfetch');

class ImageGen {

	async cat() {
		const { body } = await request.get('https://api.alexflipnote.dev/cats');

		const image = body.file;

		return image;
	}

	async dog() {
		const { body } = await request.get('https://api.alexflipnote.dev/dogs');

		const image = body.file;

		return image;
	}

	async clyde(text) {
		const { body } = await request.get('https://nekobot.xyz/api/imagegen?type=clyde&text=' + text);

		const content = body.message;

		return content;
	}

	async birb() {
		const { body } = await request.get('https://api.alexflipnote.dev/birb');

		const image = body.file;

		return image;
	}

}

module.exports = ImageGen;