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

  function printTasks() {
    console.log('Lista de tareas:');
    tasks.forEach(task => {
      console.log(`ID: ${task.id}`);
      console.log(`Descripción: ${task.description}`);
      console.log(`Estado: ${task.status}`);
      console.log('------------');
    });
  }
  
  function showMenu() {
    console.log('--- Administrador de Tareas ---');
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Marcar tarea como completada');
    console.log('4. Mostrar lista de tareas');
    console.log('0. Salir');
  }
 
  function runTaskManager() {
    let exit = false;
  
    while (!exit) {
      showMenu();
      const choice = readline.questionInt('Elige una opcion: ');
  
      switch (choice) {
        case 0:
          exit = true;
          console.log('¡Hasta luego!');
          break;
        case 1:
          addTask();
          break;
        case 2:
          deleteTask();
          break;
        case 3:
          completeTask();
          break;
        case 4:
          printTasks();
          break;
        default:
          console.log('Opción invalida. Por favor, elige una opción valida.');
      }
      console.log('-------------------------------');
    }
  }
  
  runTaskManager();
  
  
  