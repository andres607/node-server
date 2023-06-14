# node-server

¿Qué sucedió al usar async y await?
Al usar async y await, se logra una ejecución asíncrona de las funciones que retornan. Con async, se indica que la función tiene operaciones asincrónicas y puede utilizar await para esperar a que se resuelvan las promesas.

¿Qué sucedió al usar el método then()?
Al usar el método then(), se da resolucion de las promesas utilizando una cadena de callbacks. Cada then() se encarga de procesar el resultado de una promesa anterior y pasar el valor resultante al siguiente then().

¿Qué diferencias encontraste entre async, await y el método then()?
La principal diferencia entre async, await y el método then() radica en la forma en que se maneja el flujo de ejecución y la legibilidad del código, async y await proporcionan una forma más legible y sincrónica de trabajar con promesas, mientras que el método then() es útil en situaciones donde se necesita un mayor control y encadenamiento de promesas.
