let number = parseInt(prompt("Escribe el tamaño de la matriz"))
let inicio = 0;
let limite = number-1;
let c = 1;

let matriz = new Array(number);
for(i=0; i<number; i++){
  matriz[i] = new Array(number);
}

for(i=0; i<number; i++){
    for(j=0; j<number; j++){
      matriz[i][j] = 0;
    }
}

while (c <= (Math.pow(number,2))){

    for(i = inicio; i<=limite; i++){
      matriz[inicio][i]= c;
      c++;
    }
    for(i = inicio+1; i<=limite; i++){
      matriz[i][limite] = c;
      c++;
    }

    for(i = limite-1; i>=inicio; i--){
      matriz[limite][i] = c;
      c++;
    }
    //itera fila a columna
    for(i=limite-1; i >= inicio+1; i--){
      matriz[i][inicio] = c;
      c++;
    }

  inicio = inicio+1;
  limite = limite-1;
}

document.write("<table>");

for(i=0; i<=number; i++){
    document.write("<tr>");
    for(j=0; j<=number; j++){
        document.write("<td align='center'>"+matriz[i][j]+"</td>");
    }
    document.write("</tr>");
}
document.write("<table>");

