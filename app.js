const express = require('express');
const redis = require('redis');

const PORT = 8080;

const app = express();

const client = redis.createClient({
	host: 'redis-server',
	port: 6379
});

client.set('number', 0);

app.get('/', (req, res) => {
	client('number', (error, number) => {
		client.set('number', Number(number) + 1);
		res.send(`"/" 접근 시 숫자가 1씩 올라갑니다.: ${number}`);
	});
});

app.listen(PORT, () => {
	console.log(`🚀 어플리케이션을 시작합니다. (PORT: ${PORT})`);
});
