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
 
  async function run() {
    let choice = '';
  
    while (choice !== '0') {
      showMenu();
      choice = readline.question('Elija una opcion: ');
  
      switch (choice) {
        case '1':
          try {
            const addMessage = await addTask();
            console.log(addMessage);
          } catch (error) {
            console.log('Error:', error);
          }
          break;
        case '2':
          deleteTask()
            .then(message => console.log(message))
            .catch(error => console.log('Error:', error));
          break;
        case '3':
          completeTask()
            .then(message => console.log(message))
            .catch(error => console.log('Error:', error));
          break;
        case '4':
          try {
            const taskList = await viewTasks();
            console.log('=== Lista de Tareas ===');
            taskList.forEach((task, index) => {
              console.log(`Tarea ${index + 1}:`);
              console.log(`Indicador: ${task.indicator}`);
              console.log(`Descripcion: ${task.description}`);
              console.log(`Estado: ${task.completed ? 'Completada' : 'Pendiente'}`);
              console.log('-------------------------');
            });
          } catch (error) {
            console.log('Error:', error);
          }
          break;
        case '0':
          console.log('Saliendo del programa.');
          break;
        default:
          console.log('Opcion invalida. Intente nuevamente.');
      }
  
      console.log('\n');
    }
  }

  run();
