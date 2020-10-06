const request = require('node-superfetch');

class ImageGen {

	async cat() {
		const { body } = await request.get('https://api.alexflipnote.dev/cats');

		const image = body.file;

		return image;
	}

}

module.exports = ImageGen;