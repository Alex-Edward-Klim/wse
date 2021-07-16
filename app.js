// CLIENT

// Можно НЕ импортировать WebSocket, т.к. он есть в браузере
// const WebSocket = require('ws');

// Подключаем WebSocket на 3000 порту (номер порта берётся от сервера)
const ws = new WebSocket('ws://localhost:3000');

// При получении сообщения от сервера выводим данное сообщение в консоль
ws.onmessage = response => console.log(response.data);



// Далее ненужный тебе код просто для примера (удали потом)

// Берём кнопку на сайте (клиенте)
const btn = document.querySelector('.btn');

// При нажатии на кнопку
btn.addEventListener('click', () => {
  // отправляем сообщение на сервер
  ws.send("Click!")
});
// А сервер, получив данное сообщение от этого клиента, отправляет его всем клиентам (в т.ч. и этому (с которого ты его отправила))
// и обрабатывается данное сообщение на 10-ой строке (см. выше): сообщение выводится в консоль
// Т.е. один клиент отправляет сообщение серверу, а сервер как бы переотправляет данное сообщение всем клиентам (в т.ч. и этому, отправившему данное сообщение); а потом все клиенты обрабатывают его нужным образом (в нашем примере клиент просто выводит в консоль (см. выше 10-ую строку))
