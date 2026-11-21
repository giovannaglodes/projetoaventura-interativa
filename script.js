const scenes = {
  inicio: {
    chapter: '01', title: 'O mapa encontrado', art: 'scene-map', symbol: '🗺️',
    text: 'Você encontra um mapa antigo dentro de um livro esquecido no sótão. Nele, há um desenho da Floresta de Âmbar e uma frase escrita à mão: “O segredo aparece para quem sabe escolher”. Ao anoitecer, você chega à entrada da floresta. Duas trilhas aparecem diante de você.',
    hint: 'O vento parece sussurrar seu nome entre as árvores.',
    choices: [
      { label: 'Seguir pela trilha iluminada por pequenas luzes', next: 'luzes' },
      { label: 'Entrar pela trilha estreita entre as árvores', next: 'arvores' }
    ]
  },
  luzes: {
    chapter: '02', title: 'O caminho das luzes', art: 'scene-forest', symbol: '✨',
    text: 'As luzes flutuam como vaga-lumes e guiam você até uma clareira. No centro, há uma pequena raposa com uma pata presa entre raízes. Atrás dela, você vê uma ponte de pedra que atravessa um riacho.',
    hint: 'A raposa olha para você como se estivesse pedindo ajuda.',
    choices: [
      { label: 'Ajudar a raposa a se soltar', next: 'raposa' },
      { label: 'Seguir direto para a ponte', next: 'ponte' }
    ]
  },
  arvores: {
    chapter: '02', title: 'A trilha silenciosa', art: 'scene-forest', symbol: '🌲',
    text: 'Os galhos formam um túnel sobre sua cabeça. Depois de alguns minutos, você encontra uma mochila caída no chão. Dentro dela há uma lanterna e um bilhete: “A água mostra aquilo que os olhos escondem”. Um som de correnteza vem da esquerda.',
    hint: 'A lanterna ainda tem energia suficiente para iluminar o caminho.',
    choices: [
      { label: 'Acender a lanterna e procurar a origem do som', next: 'rio' },
      { label: 'Guardar o bilhete e continuar pela trilha', next: 'ponte' }
    ]
  },
  raposa: {
    chapter: '03', title: 'Uma nova amizade', art: 'scene-forest', symbol: '🦊',
    text: 'Com cuidado, você afasta as raízes e liberta a raposa. Ela dá uma volta ao seu redor e deixa cair uma pequena chave dourada aos seus pés. Em seguida, corre até uma passagem escondida atrás das samambaias.',
    hint: 'A chave tem o mesmo símbolo que aparece no seu mapa.',
    choices: [
      { label: 'Seguir a raposa pela passagem secreta', next: 'passagem' },
      { label: 'Guardar a chave e explorar a ponte primeiro', next: 'ponte' }
    ]
  },
  ponte: {
    chapter: '03', title: 'A ponte antiga', art: 'scene-river', symbol: '🌉',
    text: 'A ponte range sob seus passos. No meio dela, existe uma placa com duas inscrições: “Coragem abre portas” e “Paciência revela caminhos”. Do outro lado, uma porta de madeira está coberta por símbolos antigos.',
    hint: 'Parece que a porta precisa de algo para ser aberta.',
    choices: [
      { label: 'Examinar os símbolos com calma', next: 'porta' },
      { label: 'Procurar outro caminho pela margem do rio', next: 'rio' }
    ]
  },
  rio: {
    chapter: '03', title: 'O rio das respostas', art: 'scene-river', symbol: '💧',
    text: 'A água é tão transparente que você consegue ver pedras brilhantes no fundo. Ao tocar uma delas, uma imagem aparece na superfície: uma caverna com uma porta redonda. Você percebe que o desenho é igual ao do mapa.',
    hint: 'Uma das pedras parece ter o formato de uma pequena estrela.',
    choices: [
      { label: 'Pegar a pedra em formato de estrela', next: 'porta' },
      { label: 'Seguir o rio até a entrada da caverna', next: 'caverna' }
    ]
  },
  passagem: {
    chapter: '04', title: 'A passagem secreta', art: 'scene-cave', symbol: '🗝️',
    text: 'A passagem leva a uma sala escondida sob as raízes de uma árvore gigantesca. No centro há um pedestal com uma fechadura dourada. A chave da raposa encaixa perfeitamente, e uma escada começa a surgir no chão.',
    hint: 'Você sente que está muito perto de descobrir o segredo.',
    choices: [{ label: 'Descer a escada', next: 'tesouro' }]
  },
  porta: {
    chapter: '04', title: 'A porta dos símbolos', art: 'scene-cave', symbol: '🚪',
    text: 'Você observa os símbolos e percebe que eles representam sol, água e estrela. Ao tocar cada um na ordem desenhada no mapa, a porta se abre lentamente. Uma luz dourada ilumina uma escadaria que desce para o interior da montanha.',
    hint: 'O mapa começa a brilhar em suas mãos.',
    choices: [{ label: 'Entrar e descobrir o que existe lá embaixo', next: 'tesouro' }]
  },
  caverna: {
    chapter: '04', title: 'A caverna escondida', art: 'scene-cave', symbol: '🔦',
    text: 'A caverna é silenciosa e cheia de cristais. No fundo, você encontra uma porta redonda com um espaço em forma de estrela. A pedra que viu no rio parece ser a peça que falta.',
    hint: 'A luz dos cristais pulsa como se estivesse viva.',
    choices: [
      { label: 'Procurar uma pedra em forma de estrela', next: 'porta' },
      { label: 'Bater suavemente na porta', next: 'final-bom' }
    ]
  },
  tesouro: {
    chapter: '05', title: 'O verdadeiro tesouro', art: 'scene-ending', symbol: '🌟',
    text: 'No fim da escada, você encontra uma árvore pequena e luminosa crescendo dentro de uma câmara de pedra. Ao redor dela, há livros, sementes e desenhos de pessoas que já passaram por ali. Você entende: o segredo da floresta não era ouro, mas um lugar onde histórias e ideias podiam continuar crescendo. A árvore entrega uma semente brilhante para você levar para casa.',
    hint: 'Você descobriu o final: Guardião(ã) das Histórias.',
    ending: true,
    choices: [{ label: 'Jogar novamente e fazer escolhas diferentes', next: 'inicio' }]
  },
  'final-bom': {
    chapter: '05', title: 'O segredo compartilhado', art: 'scene-ending', symbol: '🌈',
    text: 'A porta se abre com um brilho suave. Lá dentro, você encontra um salão cheio de pequenas luzes que guardam as memórias da floresta. Uma voz agradece por sua curiosidade e coragem. Você sai de lá sabendo que algumas descobertas não precisam ser levadas: basta compartilhá-las.',
    hint: 'Você descobriu o final: Explorador(a) da Floresta.',
    ending: true,
    choices: [{ label: 'Jogar novamente e fazer escolhas diferentes', next: 'inicio' }]
  }
};

const startButton = document.querySelector('#start-button');
const gameSection = document.querySelector('#game');
const sceneTitle = document.querySelector('#scene-title');
const sceneText = document.querySelector('#scene-text');
const sceneHint = document.querySelector('#scene-hint');
const sceneArt = document.querySelector('#scene-art');
const choicesContainer = document.querySelector('#choices');
const chapterNumber = document.querySelector('#chapter-number');
const stepCount = document.querySelector('#step-count');
const progressBar = document.querySelector('#progress-bar');
const restartButton = document.querySelector('#restart-button');
const hero = document.querySelector('.hero');
const howTo = document.querySelector('.how-to');

let currentScene = 'inicio';
let steps = 1;

function showScene(sceneId) {
  const scene = scenes[sceneId];
  if (!scene) return;

  currentScene = sceneId;
  if (sceneId === 'inicio') steps = 1;
  else steps += 1;

  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  sceneHint.textContent = scene.hint;
  chapterNumber.textContent = scene.chapter;
  stepCount.textContent = `PASSO ${steps}`;
  sceneArt.className = `scene-art ${scene.art}`;
  sceneArt.textContent = scene.symbol;
  progressBar.style.width = scene.ending ? '100%' : `${Math.min(steps * 18, 88)}%`;

  choicesContainer.innerHTML = '';
  scene.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice-button';
    button.textContent = choice.label;
    button.dataset.nextScene = choice.next;
    button.dataset.choiceIndex = index;
    choicesContainer.appendChild(button);
  });
}

function beginAdventure() {
  hero.hidden = true;
  howTo.hidden = true;
  gameSection.hidden = false;
  showScene('inicio');
  gameSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// O evento é delegado ao contêiner: assim, todos os botões de escolha funcionam.
choicesContainer.addEventListener('click', (event) => {
  const selectedButton = event.target.closest('[data-next-scene]');
  if (!selectedButton) return;
  showScene(selectedButton.dataset.nextScene);
});

startButton.addEventListener('click', beginAdventure);
restartButton.addEventListener('click', () => {
  gameSection.hidden = true;
  hero.hidden = false;
  howTo.hidden = false;
  currentScene = 'inicio';
  steps = 1;
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Exemplo de forEach e addEventListener para os elementos da página.
document.querySelectorAll('.how-item').forEach((item) => {
  item.addEventListener('mouseenter', () => item.classList.add('is-highlighted'));
  item.addEventListener('mouseleave', () => item.classList.remove('is-highlighted'));
});
