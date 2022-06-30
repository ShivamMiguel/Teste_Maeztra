function VerificarNumRepetidos (numeros){
  const arr = []
  const arrRep = []


/*verifiquei o seguinte: Caso um numero ainda não exista no arr então deve ser incluso e caso ja exista deve ser incluso 
quer seja o arr como tambem no arrRep */ 
  for (const i of numeros) {

    if(arr.includes(i)){
        if(!arrRep.includes(i) )
        arrRep.push(i)  
    
    
    }  else{
        arr.push(i)
    }
  }

  console.log(arrRep)

}

VerificarNumRepetidos([1,5,5,7,8,9,8,1]) // chamada da função
