let Calculadora =(num1,num2,simboloO)=>{
    
    
    switch (simboloO){
        case '+': return num1+num2
        case '-': return num1-num2
        case'*': return num1*num2
        case '/':
            if (num2==0){
                return 'ERROR la operacion no puede realizarse'
            }else {
                return num1/num2
            }
    }return'simbolo de la operacion no valida'

}