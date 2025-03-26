/**
 * Genera un conjunto de parámetros de prueba para la función twoSum.
 *
 * @returns {{nums: number, target: number}} Un objeto con un array de números 'nums' y un número 'target'.
 */

function generarParametrosTwoSum() {
    /*
    Declaramos los constraints que nos proporcionó LeetCode en la página del problema.
    "2 <= nums.length <= 10^4
    -10^9 <= nums[i] <= 10^9
    -10^9 <= target <= 10^9
    Only one valid answer exists."
    */
    const minLength = 2;
    const maxLength = 10000;
    //El método Math.pow() devuelve el valor elevado a la potencia.
    //Por lo que aquí declaramos los valores máximos y mínimos según lo solicitado.
    const minValue = -Math.pow(10, 9); //-1,000,000,000 (-un billón). 
    const maxValue = Math.pow(10, 9); //1,000,000,000 (un billón). 
  
    /*
    Generamos un numero aleatorio entero dentro del rango definido para representar la longitud del array.
    Math.floor redondeo hacia abajo al entero más cercano.
    Math.random proporciona un número al azar, este siempre son decimales >= 0 y <1.
    La operación "(maxLength - minLength + 1)" == (10000 - 2) + 1 = 9998 + 1 = 9999.
    Siendo esa la cantidad total de números enteros posibles dentro del rango.
    El ejecutarlo todo, obtendría Obtendrías un número entero aleatorio que estaría 
    en el rango de 0 (inclusive) hasta 9998 (inclusive).
    Entonces le necesitamos sumar +2 siendo el minLength para que cumpla la restricción
    Generando números del 2 al 10,000.
    */
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  
    /*
    Generar el array nums con números aleatorios dentro del rango
    Usaremos .from() para crear una nueva instancia de Array a partir de otro objeto.
    En este caso, el valor númerico de length que recien generamos.
    Después de eso con la función flecha asignamos un valor a cada posición del nuevo array
    Usando la misma lógica de const length para calcular un número entre los valores máximos y mínimos.
    */
    const nums = Array.from({ length }, () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
  
    // Seleccionar dos índices aleatorios distintos para asegurar una única solución.
    let index1 = Math.floor(Math.random() * length);
    let index2;
    //Bucle para obtener otro resultado si los índices se duplican.
    do {
      index2 = Math.floor(Math.random() * length);
    } while (index2 === index1);
  
    //Sumamos ambos valores según los índices generados para obtener el target.
    const target = nums[index1] + nums[index2];
  
    return { nums, target };
  }
  //Función anonima a la cual le asignamos la variable twoSum, establecemos nums y target como parámetros
//Pues son los valores que recibirá nuestra función.
var twoSum = function(nums, target) {
    //Primer bucle, la variable i comienza en 0, pues la usaremos para representar la posición 0 del array.
    //Seguirá hasta que i sea == la longitud del array, que desconocemos pues es generada random.
    //Por aca iteración del bucle, el valor de i aumentará para eventualmente alcanzar este requisito.
    for (let i = 0; i<nums.length; i++){
        //Segundo bucle, será lo mismo pero ahoa usaremos la varaible j
        //la cual será la siguiente posición, asegurando que se vaya recorriendo el array.
        for (let j = i+1; j<nums.length; j++ ){
            //Condicional que verifica si la suma de ambos digitos es igual a mi target.
            //Suma el primer valor del array, al que sigue y eventualmente lo recorre por completo
            //Hasta que encontremos un match, después de eso return detendrá la función.
            if(nums[i]+nums[j]==target){
                //return se utiliza para salir de la función actual y devolver un valor.
                //Una vez que se ejecuta , la función deja de ejecutarse.
                //Creo un nuevo array el cual retorno como respuesta el cual tiene los valores
                //de las variables i,j siendo estas la posición en el array que corresponde a 
                //los digitos cuya suma es igual al target solicitado.
                return [i,j];
                //En si lo que hicimos fue usar un bucle doble para sumar el primer digito a todos los siguientes
                //y luego el segundo digito a todos los siguientes
                //De esta manera optimizamos evitando sumas repetidas e innecesarias.
            }
        }
    }
};

  //Imprimir los resultados:
  const pruebaParametros = generarParametrosTwoSum();
  console.log("Parámetros de prueba generados:");
  console.log("nums:", pruebaParametros.nums);
  console.log("target:", pruebaParametros.target);
  
  const resultado = twoSum(pruebaParametros.nums, pruebaParametros.target);
  console.log("Resultado de twoSum:", resultado);

