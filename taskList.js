const readline = require('readline-sync');

let tasks = [];

function addTask() {
  return new Promise((resolve, reject) => {
    const indicator = readline.question('Ingrese el indicador de tarea:');
    const description = readline.question('Ingrese descripcion de la tarea:');
  

    tasks.push({
      indicator,
      description,
      completed: false
    });

    resolve('La tarea se añadio correctamente.');
  });
}

function deleteTask() {
    return new Promise((resolve, reject) =>{
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
 
  function runTaskList() {
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
  
  runTaskList();
  