/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*Función anonima a la cual le asignamos la variable twoSum, establecemos nums y target como parámetros
Pues son los valores que recibirá nuestra función.*/
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
                /*return se utiliza para salir de la función actual y devolver un valor.
                Una vez que se ejecuta , la función deja de ejecutarse.
                Creo un nuevo array el cual retorno como respuesta el cual tiene los valores
                de las variables i,j siendo estas la posición en el array que corresponde a 
                los digitos cuya suma es igual al target solicitado.
                return [i,j];
                En si lo que hicimos fue usar un bucle doble para sumar el primer digito a todos los siguientes
                y luego el segundo digito a todos los siguientes
                De esta manera optimizamos evitando sumas repetidas e innecesarias. */
            }
        }
    }
};