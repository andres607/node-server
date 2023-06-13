const readline = require('readline-sync');

let tasks = [];

function addTask() {
  const id = tasks.length + 1;
  const description = readline.question('Descripcion de la tarea: ');
  const status = 'incompleta';

  tasks.push({ id, description, status });
  console.log('Tarea añadida con exito.');
}

function deleteTask() {
    const taskId = readline.questionInt('ID de la tarea a eliminar: ');
  
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      console.log('Tarea eliminada con éxito.');
    } else {
      console.log('No se encontró una tarea con ese ID.');
    }
  }
  
  function completeTask() {
    const taskId = readline.questionInt('ID de la tarea completada: ');
  
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      task.status = 'completada';
      console.log('Tarea marcada como completada.');
    } else {
      console.log('No se encontró una tarea con ese ID.');
    }
  }
  
  