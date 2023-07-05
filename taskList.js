const http = require('http');
const port = 4000;

let tasks = [];
let taskIdCounter = 1;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/tasks') {
    let body = '';

    req.on('data', (data) => {
      body += data;
    });

    req.on('end', () => {
      const { description } = JSON.parse(body);
      const id = taskIdCounter++;

      const task = {
        id,
        description,
        completed: false
      };

      tasks.push(task);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'La tarea se añadió correctamente.', task }));
    });
  } else if (req.method === 'DELETE' && req.url.startsWith('/tasks/')) {
    const id = parseInt(req.url.split('/')[2]);

    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'Tarea eliminada con éxito.' }));
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'No se encontró la tarea con el ID proporcionado.' }));
    }
  } else if (req.method === 'PUT' && req.url.startsWith('/tasks/')) {
    const id = parseInt(req.url.split('/')[2]);

    const task = tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'Tarea completada.', task }));
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'No se encontró la tarea con el ID proporcionado.' }));
    }
  } else if (req.method === 'GET' && req.url === '/tasks') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});