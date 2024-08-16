let i=0
while(i<6){
    i++;
    if(i===2){
        continue;//todo el codigo siguiente se ignora pero continua ejectuando el bucle
    }
    if (i===4){
        break;// break directamente detiene el bucle 
    }
    console.log(i);
}