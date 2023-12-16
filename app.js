const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
	res.send('nodejs docker app!');
});

app.listen(PORT, () => {
	console.log(`🚀 어플리케이션을 시작합니다. (PORT: ${PORT})`);
});
