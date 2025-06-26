function trocarcharmander(){
  document.getElementById("pokemon-name").innerHTML = "Charmander";
  document.getElementById("pokemon-img").src = "imagens/Charmander.png";
  document.getElementById("attacks-list").innerHTML = "<li>Chama</li><li>Arranhão</li><li>Golpe de Cauda</li>";
  document.getElementById("pokemon-type").innerHTML = "Tipo: Fogo";
  document.getElementById("pokemon-card").style.backgroundColor = "red"; // Cor de fundo para Charmander
}

function trocarsquirtle(){
  document.getElementById("pokemon-name").innerHTML = "Squirtle";
  document.getElementById("pokemon-img").src = "imagens/Squirtle.jpg";
  document.getElementById("attacks-list").innerHTML = "<li>Jato d'Água</li><li>Investida</li><li>Giro Rápido</li>";
  document.getElementById("pokemon-type").innerHTML = "Tipo: Água";
  document.getElementById("pokemon-card").style.backgroundColor = "blue"; // Cor de fundo para Squirtle
}

function Home() {
  window.location.href = 'index.html'; // Substitua 'index.html' pelo caminho correto, se necessário
}