// SERVER

// Импортируем WebSocket
const WebSocket = require('ws');

// Создаём сервер на 3000 порту (порт может быть любой на твой выбор)
const server = new WebSocket.Server({ port: 3000 });

// Добавляем listener на connection (когда к серверу подключится клиент/клиенты)
server.on('connection', ws => {

  // При получении сообщения от любого клиента
  ws.on('message', message => {
    // Всем клиентам, подключённым к серверу
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        // Отправляем полученное сообщение (от одного из клиентов) ВСЕМ клиентам
        client.send(message);
      }
    })
  });
});
