const keypress = require('keypress');

const menuOptions = [
  "Coelho",
  "Gato",
  "Pato",
  "Sair"
];

let selectedOption = 0;

function displayMenu() {
  console.clear();
  console.log("Selecione uma opção:");

  for (let i = 0; i < menuOptions.length; i++) {
    if (i === selectedOption) {
      console.log(`-> ${menuOptions[i]}`);
    } else {
      console.log(`   ${menuOptions[i]}`);
    }
  }
}

function handleKeypress(ch, key) {
  if (key) {
    if (key.name === 'up' && selectedOption > 0) {
      selectedOption--;
    } else if (key.name === 'down' && selectedOption < menuOptions.length - 1) {
      selectedOption++;
    } else if (key.name === 'return') {
      handleSelection();
    }

    displayMenu();
  }
}

function handleSelection() {
  console.log(`Você selecionou: ${menuOptions[selectedOption]}`);

  if (selectedOption === menuOptions.length - 1) {
    console.log("Saindo...");
    process.exit();
  }

  // Adicione a lógica para cada opção aqui
}

// Inicializar keypress
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('keypress', handleKeypress);

// Iniciar o menu
displayMenu();