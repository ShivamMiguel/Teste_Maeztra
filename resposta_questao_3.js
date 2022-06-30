function validaParentesis(str = "") {
    const arrayStr = str.split("");
    if (str.length % 2 === 1) {
      console.log("Sequência não válida!");
      return;
    }
  
    const abrir = ["[", "(", "{"];
    const fechar = ["]", ")", "}"];
    //Array que guarda as posições onde estão os pares
    const a = [];
  
    if (fechar.includes(arrayStr[0])) {
      console.log("Sequência não válida!");
      return;
    }
  
    for (let j = 0; j < arrayStr.length - 1; j++) {
      //Se na posição j o elemento for '{', '(', '[' ele vai execurat um for para procurar o fechamento
      if (abrir.includes(arrayStr[j])) {
        for (let i = j + 1; i < arrayStr.length; i++) {
          //Se o elemento for um fechamento
          if (fechar.includes(arrayStr[i])) {
            //Neste caso fechamento com a mesma posição que o sinal que a abertura
            if (fechar.indexOf(arrayStr[i]) === abrir.indexOf(arrayStr[j])) {
              //Para que os pares estejam corretos a distância entre eles é sempre um ímpar
              if ((i - j) % 2 === 1) {
                //Guarda as posições de abertura e fechamento
                a.push([j, i]);
              }
            }
          }
        }
      }
    }
  
    a.reverse().forEach((el) => {
      arrayStr.splice(a[0], 1);
      arrayStr.splice(a[1], 1);
    });
  
    console.log(
      arrayStr.length === 0 ? "Sequência válida" : "Sequência não válida"
    );
  }
  
  const str = "{}[][][]()(";
  
  validaParentesis(str);