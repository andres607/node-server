const readline = require('readline-sync');

let tasks = [];

function addTask() {
  const id = tasks.length + 1;
  const description = readline.question('Descripcion de la tarea: ');
  const status = 'incompleta';

  tasks.push({ id, description, status });
  console.log('Tarea añadida con exito.');
}