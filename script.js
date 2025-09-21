class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia ✨";
        break;
      case "guerreiro":
        ataque = "espada ⚔️";
        break;
      case "monge":
        ataque = "artes marciais 🥋";
        break;
      case "ninja":
        ataque = "shuriken 🗡️";
        break;
      default:
        ataque = "ataque desconhecido";
    }

    const mensagem = `${this.tipo} atacou usando ${ataque}`;

    // Mostrar na tela com efeito
    const resultado = document.getElementById("resultado");
    resultado.style.color = "#6a0dad";
    resultado.style.opacity = 0;
    resultado.innerText = mensagem;

    setTimeout(() => {
      resultado.style.opacity = 1;
    }, 100);

    // Adicionar ao histórico
    const lista = document.getElementById("listaHistorico");
    const item = document.createElement("li");
    item.innerText = mensagem;
    item.style.background = "#f5e6ff";
    lista.prepend(item);
  }
}

// Criando os heróis
const heroi1 = new Heroi("Merlin", 150, "mago");
const heroi2 = new Heroi("Aragorn", 87, "guerreiro");
const heroi3 = new Heroi("Liang", 32, "monge");
const heroi4 = new Heroi("Shinobi", 25, "ninja");

// Eventos dos botões
document.getElementById("btnMerlin").addEventListener("click", () => heroi1.atacar());
document.getElementById("btnAragorn").addEventListener("click", () => heroi2.atacar());
document.getElementById("btnLiang").addEventListener("click", () => heroi3.atacar());
document.getElementById("btnShinobi").addEventListener("click", () => heroi4.atacar());
