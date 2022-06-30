function numPessoas(numero){  // declaracão da função


function factorial(num){
let f = 1
    for(let i =num ; i > 0; i-- ){  // usei o factorial para poder calcular o numero de posições para cada numero de pessoas.
        f *= i
    }
    return f
    

}

console.log(factorial(3)) // aqui imprimimos ela com o parametro e o numero de pessoas

}

numPessoas() // chamamos a função