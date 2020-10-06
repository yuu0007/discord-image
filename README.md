# discord-image
An image generation wrapper for Discord or any kind!

# Installing
```npm install discord-image```

# Examples
- Discord.js example (v12)
```js
const Discord = require('discord.js');
const { ImageGen } = require('discord-image');
const Image = new ImageGen();

const client = new Discord.Client();

client.on('message', async message => {
	if (message.content.startsWith === '!cat') {
		const image = await Image.cat();
		message.channel.send(image);
	}
});

client.login('your_token_goes_here');
```
- CommonJS example
```js
async function cat() {
	const image = await Image.cat();
	console.log(image);
}

cat();
```

# Available Endpoints
- cat
- dog