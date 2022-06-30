
function tempoTrabalhado(matriz = []) {
  const intervalos = [];

  for (let e of matriz) {
    intervalos.push([e[0], 0]);
    intervalos.push([e[1], 0]);
  }

  //Ordenando as datas
  intervalos.sort((a, b) => a - b);

  intervalos.forEach((intervalo) => {
    intervalo[1] = matriz.filter((e) => {
      return e[0] <= intervalo[0] && e[1] >= intervalo[0] && e[0] < e[1];
    }).length;
  });

  let maiorNumeroDeTrabalhadoresPorIntervalo = 0;

  for (let i of intervalos)
    if (maiorNumeroDeTrabalhadoresPorIntervalo < i[1])
      maiorNumeroDeTrabalhadoresPorIntervalo = i[1];

  const anosComMaiorNumeroDeTrabalhadores = intervalos
    .filter((e) => e[1] === maiorNumeroDeTrabalhadoresPorIntervalo)
    .map((e) => e[0]);

  const anosComMaiorNumeroDeTrabalhadoresSemRepeticao = [];

  for (const a of anosComMaiorNumeroDeTrabalhadores)
    if (!anosComMaiorNumeroDeTrabalhadoresSemRepeticao.includes(a))
      anosComMaiorNumeroDeTrabalhadoresSemRepeticao.push(a);

  const mensagem = `${anosComMaiorNumeroDeTrabalhadoresSemRepeticao
    .map(
      (e) =>
        "no Ano de " + e + " trabalhadores ", + maiorNumeroDeTrabalhadoresPorIntervalo
    )
    .join("")}`;

  console.log(mensagem);
}

const matriz = [
  [1960, 1961],
  [1961, 1962],
  [1961, 1963],
  [1965, 1966],
  [1966, 1968],
  [1966, 1970],
];

tempoTrabalhado(matriz);