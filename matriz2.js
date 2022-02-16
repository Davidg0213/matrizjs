let filas = parseInt(prompt("digite el numero de filas"))
let columnas = parseInt(prompt("digite el numero de columnas"))

//Asumo que querias contar la cantidad de filas y columnas que hay en total.
const matriz = new Array(filas).fill(new Array(columnas))

//Otra forma seria usar la propiedad length de los arrays:
//let t = array.length * array[0].length

//Recorremos las filas
for(let i = 0; i < matriz.length; i++){
  
  //Recorremos la columna en la fila actual
  for(let j = 0; j < matriz[i].length; j++){
    //Asignamos un valor a la columna de nuestro array:
    matriz[i][j] = i+j;
    //Imprimimos la columna actual.
    document.write(matriz[i][j]);
  }
  for(let j = 0; j > matriz[i].length; j++){
    //Asignamos un valor a la columna de nuestro array:
    matriz[j][i] = j+i;
    //Imprimimos la columna actual.
    document.write(matriz[i][j]+"");
  }
  // for(let j = 0; j > matriz[i].length; j++){
  //   //Asignamos un valor a la columna de nuestro array:
  //   matriz[i][j] = i + j;
  //   //Imprimimos la columna actual.
  //   document.write(matriz[i][j]);
  // }
  // for(let j = 0; j > matriz[i].length; j++){
  //   //Asignamos un valor a la columna de nuestro array:
  //   matriz[j][i] = i + j+1;
  //   //Imprimimos la columna actual.
  //   document.write(matriz[i][j]+1);
  // }
  
  document.write("<br>");
  
}