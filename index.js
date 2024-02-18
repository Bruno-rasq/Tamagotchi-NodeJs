const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function alimentar(){
  console.log('alimentando...')
}
function brincar(){
  console.log('brincando...')
}
function dormir(){
  console.log('dormindo...')
}

function exibirMenu() {
  console.log('\nMenu:');
  console.log('')
  console.log('1. alimentar | 2. brincar | 3. dormir | 4. sair');
  console.log('')
}

function iniciar() {
  
  exibirMenu();

  rl.question('Escolha uma opção: ', (opcao) => {

    switch (opcao) {
      case '1':
        alimentar();
        break;
        
      case '2':
        brincar();
        break;

      case '3':
        dormir();
        break;
        
      case '4':
        console.log('Saindo do programa. Adeus!');
        rl.close();
        return;
        
      default:
        console.log('Opção inválida. Tente novamente.');
        break;
    }

    setTimeout(() => {
      console.clear();
      iniciar();
    }, 10000);
  });
}

iniciar();