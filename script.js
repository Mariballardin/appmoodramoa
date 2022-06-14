
 const elementoResposta = document.querySelector("#resposta")

const buttonPerguntar = document.querySelector('#buttonPerguntar')


 
    // Necessário declarar a variável img 
    const respostas = [
      "Because",
      "Não como carboidrato desde 2002", 
      "Meu nome é body revenge", 
      "Eu estou grávida de Luis Carlos Prestes",
      "gente?!",
      "Não bebo álcool há 2 dias. Disciplina.",
      "Pedrinho da Tijuca. Tom Cruise brasileiro.",
      "Plutão ainda é um planeta da Astrologia",
      "A vida é muito loka né? Também acho.",
      "Siga sempre sorrindo."
      "Esse corte é meio Helena do Manoel Carlos",
      "sigo exausta",
      "gostosa sim.",
      "estou com efeitos secundários da covid19: ficquei ainda mais gato.",
      "ai sei lá gabi só quem viveu sabe",
      "eu tô pobre mas eu tô na Europa",
      "quem nasceu piriga nunca vai ser diva.",
      "minha vida é uma novela. Pena que é do SBT",
      "a busca é o próprio after",

    
     ]

    function fazerPergunta() {
      buttonPerguntar.setAttribute("disable", true)

      const totalRespostas = respostas.length
      const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

      elementoResposta.innerHTML = respostas[numeroAleatorio]
      elementoResposta.style.opacity = 1;

 
    } 


    /* tentativa dois
    var imglis = ["https://cdn.pixabay.com/photo/2022/05/23/18/45/bee-7216939_960_720.jpg", "https://cdn.pixabay.com/photo/2022/05/23/18/45/bee-7216939_960_720.jpg"]; 

function imagem_aleatoria() {
  var p, n, tmp, destino = document.querySelector('#imgdest');
  var img_len = imglis.length;
  for (p = img_len; p;) {
    n = Math.random() * p-- | 0;
    tmp = imglis[n];
    imglis[n] = imglis[p];
    imglis[p] = tmp;
  }
  destino.src = imglis[0];
}

function atualiza_item_lista(y) { 
  var lis = document.querySelector('#listai');
  if (y<lis.children.length) { 
    lis.children[y].children[0].src = imglis[y];
  }
  else {
    if (y<imglis.length) {
      var itt = document.createElement('li');
      var img = document.createElement('img');
      img.src = imglis[y];
      itt.appendChild(img);
      lis.appendChild(itt);
    }
  }
} */