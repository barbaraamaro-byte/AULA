const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Enquanto explorava a antiga biblioteca da sua cidade, você encontra um grimório lendário perdido há séculos. Ele promete conceder conhecimento mágico instantâneo a qualquer leitor. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é perigoso! Magia sem esforço sempre tem um custo.",
                afirmacao: "Ao encontrar o grimório lendário, você se mostrou cauteloso diante do poder imediato da magia."
            },
            {
                texto: "Isso é incrível! Posso aprender em dias o que magos levam anos para dominar.",
                afirmacao: "Ao encontrar o grimório lendário, você vislumbrou um universo de possibilidades e aprendizado sem limites."
            }
        ]
    },
    {
        enunciado: "O Mestre do Conclave Arcano descobre sua descoberta e exige que você escreva um tratado sobre a influência dos livros antigos na magia moderna. Como você realiza essa pesquisa?",
        alternativas: [
            {
                texto: "Utilizar um feitiço de consulta rápida para resumir tomos esquecidos e extrair apenas as informações mais diretas.",
                afirmacao: "Na hora do estudo, preferiu a eficiência das artes arcanas para sintetizar séculos de sabedoria."
            },
            {
                texto: "Consultar os arquivistas mais velhos, ler os manuscritos originais e debater com outros aprendizes de magia.",
                afirmacao: "Na hora do estudo, buscou o conhecimento na experiência humana e na leitura atenta dos velhos manuscritos."
            }
        ]
    },
    {
        enunciado: "No Grande Conselho de Magos, surge um debate acalorado: os autômatos mágicos e runas de automação vão substituir os jovens aprendizes e escribas. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defende que a magia automatizada é perigosa, pois tira o propósito e o ganho de vida dos jovens escribas e artesãos.",
                afirmacao: "No Conselho, posicionou-se a favor da tradição e da proteção dos escribas contra a automação desmedida."
            },
            {
                texto: "Defende que os autômatos libertam os magos das tarefas repetitivas, permitindo focar em feitiços mais complexos e na expansão do saber.",
                afirmacao: "No Conselho, argumentou que o avanço arcano abre novas portas e liberta a mente humana para criações maiores."
            }
        ]
    },
    {
        enunciado: "Ao final da assembleia, você precisa criar um selo mágico de proteção que represente o seu ideal de futuro para o reino. Como você o desenvolve?",
        alternativas: [
            {
                texto: "Desenhar o selo à mão utilizando tintas de alquimia tradicional e penas de fênix.",
                afirmacao: "Para simbolizar suas ideias, moldou um selo único usando a arte tradicional e pigmentos alquímicos."
            },
            {
                texto: "Gerar o selo utilizando uma matriz arcana de feitiço automatizado que combina geometrias perfeitas.",
                afirmacao: "Para simbolizar suas ideias, conjurou um selo preciso através de matrizes arcanas de última geração."
            }
        ]
    },
    {
        enunciado: "Você e seu grupo de aventureiros recebem a missão de traduzir uma profecia sobre dragões. Um colega usou uma poção de tradução automática sem revisar o sentido das palavras antigas. O que você faz?",
        alternativas: [
            {
                texto: "Alertar o grupo que magia de tradução pode cometer erros graves de interpretação, e que a revisão humana e o conhecimento histórico são indispensáveis.",
                afirmacao: "Frente a uma profecia crítica, garantiu que a sabedoria e a revisão pessoal evitassem grandes desastres no reino."
            },
            {
                texto: "Aceitar a tradução da poção como correta, afinal as poções mágicas são feitas com fórmulas exatas e economizam um tempo precioso.",
                afirmacao: "Frente a uma profecia crítica, confiou no poder das fórmulas mágicas para acelerar a jornada do grupo."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "No ano de 1492 da Era Arcana...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
