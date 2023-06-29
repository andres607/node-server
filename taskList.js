const express = require('express');
const app = express();
const port = 3000;

let tasks = [];

function addTask() {
  return new Promise((resolve, reject) => {
    const indicator = readline.question('Ingrese el indicador de tarea:');
    const description = readline.question('Ingrese descripcion de la tarea:');

    const task = {
      id: tasks.length + 1,
      indicator,
      description,
      completed: false
    };

    tasks.push(task);

    resolve(task);
  });
}

function deleteTask() {
  return new Promise((resolve, reject) => {
    const indicator = readline.question('Ingrese indicador de la tarea a eliminar:');

    const taskIndex = tasks.findIndex(task => task.indicator === indicator);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      resolve('Tarea eliminada con exito.');
    } else {
      reject('No se encontro la tarea con el indicador proporcionado.');
    }
  });
}

function completeTask() {
  return new Promise((resolve, reject) => {
    const indicator = readline.question('Ingrese el indicador de la tarea a completar: ');

    const task = tasks.find(task => task.indicator === indicator);
    if (task) {
      task.completed = true;
      resolve('Tarea completada.');
    } else {
      reject('No se encontro la tarea con el indicador proporcionado.');
    }
  });
}

function showMenu() {
  console.log('--- Lista de Tareas ---');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Marcar tarea como completada');
  console.log('4. Mostrar lista de tareas');
  console.log('0. Salir');
}

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

async function startServer() {
  try {
    await run();
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

startServer();
