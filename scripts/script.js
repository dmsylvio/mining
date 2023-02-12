// Define a variável para contar o número de Seren stones mineradas
let serenStoneCount = 0;

// Define uma array para armazenar as Seren stones mineradas
let minedStones = [];

// Inicie o loop de mineração
while (serenStoneCount < 100) {
  // Use a picareta para minerar a pedra
  mine();
  
  // Verifique se a pedra minerada é uma Seren stone
  if (isSerenStone()) {
    // Adicione a Seren stone à array de pedras mineradas
    minedStones.push(getMinedStone());
    
    // Incremente o número de Seren stones mineradas
    serenStoneCount++;
    
    // Gere um número aleatório entre 120 e 160 para representar o tempo de espera antes do próximo clique
    let waitTime = Math.floor(Math.random() * (160 - 120 + 1) + 120);
    
    // Pause o loop de mineração por `waitTime` segundos
    sleep(waitTime);
  }
}

// Exiba o resultado
console.log("Total de Seren stones mineradas: " + serenStoneCount);
console.log("Lista de Seren stones mineradas: " + minedStones);
