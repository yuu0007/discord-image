# discord-image
An image generation wrapper for Discord or any kind!

# Installing
```npm install discord-image```

# Examples
- Discord.js example (v12)
```js
// import the dependencies
const Discord = require('discord.js');
const { ImageGen, TextGen } = require('discord-image');

const Text = new TextGen();
const Image = new ImageGen();
const client = new Discord.Client();

// message event
client.on('message', async message => {
	if (message.content.startsWith('!cat')) {
		const cat = await Image.cat();
		message.channel.send(cat);
	} else if (message.content.startsWith('!fact')) {
		const fact = await Text.fact();
		message.channel.send(fact);
	} else if (message.content.startsWith('!clyde')) {
		// replace content with the message you want to clydify
		const clyde = await Image.clyde(content);
		message.channel.send(clyde);
	}
});

// login to the discord
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
- fact
- clyde
- bird