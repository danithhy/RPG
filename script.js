// Nomes e função aleatória
const nomes = ["Sir Cedric", "Lady Gwendolyn", "Sir Roland", "Lady Genevieve", "Sir Arthur", "Sir Tristan"];

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

const nome = aleatorio(nomes);

// Lista de Perguntas da História
const perguntas = [
    {
        enunciado: "Ao chegar às ruínas do Castelo de Oakhaven, você se depara com o portão principal entalhado em madeira antiga e uma abertura sombria na muralha lateral. Qual o seu primeiro pensamento ao encarar a fortaleza?",
        alternativas: [
            {
                texto: "Este lugar parece perigoso e amaldiçoado!",
                afirmacao: [
                    "No início sentiu receio das armadilhas e criaturas que podiam habitar o castelo.",
                    "Achou assustador pensar nos riscos de explorar ruínas esquecidas pela história."
                ],
                proxima: 1,
            },
            {
                texto: "Esta é a oportunidade perfeita para conquistar glória e riqueza!",
                afirmacao: [
                    "Empunhou sua espada com determinação, ansioso pelo combate e pela recompensa.",
                    "Pensou que o lendário Tesouro de Solaria finalmente mudaria seu destino."
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "O medo é natural até para os mais bravos. Sabendo disso, você decide inspecionar a entrada com cuidado e encontra marcas de garras nas pedras. Diante desse sinal de perigo claro, qual atitude você toma?",
        alternativas: [
            {
                texto: "Usa sua tocha para analisar as marcas no chão e procurar por mecanismos ou armadilhas ocultas nas paredes.",
                afirmacao: [
                    "Conseguiu identificar placas de pressão no solo e evitou uma queda mortal em um poço com estacas.",
                    "Percebeu que a cautela e a observação ajudam a avançar com segurança por corredores desconhecidos.",
                    "Entendeu que a luz da tocha revela segredos valiosos e evitou ser surpreendido na escuridão."
                ],
                proxima: 3,
            },
            {
                texto: "Confia apenas em seu escudo levantado e avança a passos firmes, contando com a força da sua armadura pesada.",
                afirmacao: [
                    "Sentiu mais facilidade em confiar na sua preparação física e na resistência do seu aço.",
                    "Achou melhor manter a guarda alta e depender do seu treino de cavaleiro para reagir a qualquer ataque.",
                    "Decidiu não perder tempo investigando cada detalhe e preferiu encarar de frente os perigos do castelo."
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "O entusiasmo de um verdadeiro cavaleiro o impulsiona para frente. Ao analisar a estrutura, você percebe marcas de garras nas pedras perto do acesso. Diante desse sinal de combate recente, qual atitude você toma?",
        alternativas: [
            {
                texto: "Usa sua tocha para analisar as marcas no chão e procurar por mecanismos ou armadilhas ocultas nas paredes.",
                afirmacao: [
                    "Conseguiu identificar placas de pressão no solo e evitou uma queda mortal em um poço com estacas.",
                    "Percebeu que a cautela e a observação ajudam a avançar com segurança por corredores desconhecidos.",
                    "Entendeu que a luz da tocha revela segredos valiosos e evitou ser surpreendido na escuridão."
                ],
                proxima: 3,
            },
            {
                texto: "Confia apenas em seu escudo levantado e avança a passos firmes, contando com a força da sua armadura pesada.",
                afirmacao: [
                    "Sentiu mais facilidade em confiar na sua preparação física e na resistência do seu aço.",
                    "Achou melhor manter a guarda alta e depender do seu treino de cavaleiro para reagir a qualquer ataque.",
                    "Decidiu não perder tempo investigando cada detalhe e preferiu encarar de frente os perigos do castelo."
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Com um caminho seguro até o salão central, você encontra uma bifurcação: uma escadaria espiral leva às torres superiores e uma rampa de pedra desce rumo aos calabouços. Qual caminho decidir tomar?",
        alternativas: [
            {
                texto: "Subir a escadaria espiral em direção ao ponto mais alto do castelo.",
                afirmacao: [
                    "Priorizou a vantagem tática da altura e o caminho até os aposentos nobres da fortaleza.",
                    "Acreditou que o tesouro real estaria guardado na torre mais protegida do castelo."
                ],
                proxima: 5,
            },
            {
                texto: "Descer a rampa em direção às catacumbas e calabouços sombrios.",
                afirmacao: [
                    "Investigou as profundezas escuras do castelo em busca dos cofres e segredos ocultos sob a terra.",
                    "Enfrentou a escuridão dos calabouços com a coragem de quem não teme as sombras."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Seguindo com o escudo à frente, você chega ao salão central e encontra uma bifurcação: uma escadaria espiral sobe até as torres e uma rampa desce em direção aos calabouços. Qual caminho decidir tomar?",
        alternativas: [
            {
                texto: "Subir a escadaria espiral em direção ao ponto mais alto do castelo.",
                afirmacao: [
                    "Priorizou a vantagem tática da altura e o caminho até os aposentos nobres da fortaleza.",
                    "Acreditou que o tesouro real estaria guardado na torre mais protegida do castelo."
                ],
                proxima: 5,
            },
            {
                texto: "Descer a rampa em direção às catacumbas e calabouços sombrios.",
                afirmacao: [
                    "Investigou as profundezas escuras do castelo em busca dos cofres e segredos ocultos sob a terra.",
                    "Enfrentou a escuridão dos calabouços com a coragem de quem não teme as sombras."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Ao subir os degraus da torre, um Guardião Espectral emerge das sombras com uma espada flamejante, bloqueando a porta dos aposentos reais onde o tesouro brilha ao fundo. Como você se posiciona nesse confronto?",
        alternativas: [
            {
                texto: "Recita o juramento sagrado dos cavaleiros e canaliza a energia de sua fé para fortalecer seu ataque.",
                afirmacao: [
                    "A sua honra e determinação enfraqueceram a magia sombria que prendia o guardião a este mundo.",
                    "Lutou com técnica impecável e baniu o espírito para libertar o castelo da sua maldição."
                ],
                proxima: 7,
            },
            {
                texto: "Utiliza uma bomba de fumaça e agilidade para contornar o guardião e tentar desarmá-lo por trás.",
                afirmacao: [
                    "Usou a astúcia dos grandes estrategistas de guerra para superar um oponente mágico e poderoso.",
                    "Conseguiu desarmar o espectro e destruiu o amuleto que o mantinha preso à torre."
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "Nas profundezas do calabouço, um Guardião Espectral emerge do nevoeiro, protegendo a câmara secreta onde reluz o baú de ouro. Como você se posiciona nesse confronto?",
        alternativas: [
            {
                texto: "Recita o juramento sagrado dos cavaleiros e canaliza a energia de sua fé para fortalecer seu ataque.",
                afirmacao: [
                    "A sua honra e determinação enfraqueceram a magia sombria que prendia o guardião a este mundo.",
                    "Lutou com técnica impecável e baniu o espírito para libertar o castelo da sua maldição."
                ],
                proxima: 7,
            },
            {
                texto: "Utiliza uma bomba de fumaça e agilidade para contornar o guardião e tentar desarmá-lo por trás.",
                afirmacao: [
                    "Usou a astúcia dos grandes estrategistas de guerra para superar um oponente mágico e poderoso.",
                    "Conseguiu desarmar o espectro e destruiu o amuleto que o mantinha preso à torre."
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "Com o guardião derrotado, você finalmente abre o grande baú dourado. Dentro dele, além de moedas e pedras preciosas, há um artefato antigo e brilhante. O que você faz com o Tesouro de Solaria?",
        alternativas: [
            {
                texto: "Leva o tesouro de volta para o seu reino para financiar a reconstrução das vilas e ajudar o povo.",
                afirmacao: [
                    "Tornou-se uma lenda viva conhecida como o Cavaleiro Protetor, amado por todo o reino por sua generosidade.",
                    "Usou as riquezas do Castelo de Oakhaven para trazer uma era de prosperidade e paz para sua terra."
                ],
            },
            {
                texto: "Reivindica o castelo para si e usa a magia do artefato para se tornar o novo senhor de Oakhaven.",
                afirmacao: [
                    "Aproveitou o poder do artefato antigo para erguer uma fortaleza inexpugnável e governar sobre as terras ao redor.",
                    "Iniciou uma nova linhagem de governantes nobres, mantendo o legado e os segredos do castelo de Oakhaven vivos.",
                    "Eternizou seu nome na história como o cavaleiro que conquistou o castelo esquecido e dominou seus mistérios."
                ],
            },
        ]
    }
];

// Mapeamento dos elementos HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Substitui "você" pelo nome sorteado nas perguntas
function substituiNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome();

// Eventos de clique
botaoIniciar.addEventListener('click', iniciaJogo);
botaoJogarNovamente.addEventListener("click", jogaNovamente);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.style.display = 'block';
    caixaAlternativas.style.display = 'flex';
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.style.display = 'block';
    caixaPerguntas.textContent = `Ao final desta grande jornada, a lenda de ${nome} conta que...`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.style.display = 'none';
    caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    telaInicial.style.display = 'block';
    caixaPerguntas.style.display = 'none';
    caixaAlternativas.style.display = 'none';
}
