function VerificadorDeNumOrdenados(numero){ // declarei a função



    const a = numero + ''
    const arr = []            // Para podermos fazer a verificação do Array tive que converter em string 
    for (const i of a) {

        arr.push(i)
        
    }

    const strOrdCrescente = arr.sort((c,d)=> c-d ).reduce((a,b)=> a+b)  // Aqui ordenamos a string de forma crescente
    const strOrdDecrescente = arr.sort((c,d)=> d-c).reduce((a,b)=>a+b)// ordenacão de forma decrescente 

    const mensagem = a === strOrdCrescente|| a === strOrdDecrescente?"esta ordenado": "não esta ordenado"  // usamos o operador ternario para fazer a verificação


   console.log(mensagem) // impressão do resultado
}

VerificadorDeNumOrdenados(12345678) // chamada da funcão
