const express = require('express');
const redis = require('redis');

const PORT = 8080;
const app = express();
const client = redis.createClient({
	socket: {
		host: 'redis-server',
		port: 6379
	}
});

app.get('/', async (req, res) => {
	await client.connect();
	let number = await client.get('number');
	if (number === null) {
		number = 0;
	}
	res.send(`"/" 접근 시 숫자가 1씩 올라갑니다.: ${number}`);
	await client.set('number', parseInt(number) + 1);
	await client.disconnect();
});

app.listen(PORT, () => {
	console.log(`🚀 어플리케이션을 시작합니다. (PORT: ${PORT})`);
});
