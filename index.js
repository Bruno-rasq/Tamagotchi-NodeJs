const readline = require('readline');
const { Pet } = require('./Classes.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pet = new Pet('Coelho', 'macho', 'Osvaldo');


function alimentar(){
  console.log('alimentando...')
}
function brincar(){
  console.log('brincando...')
}
function dormir(){
  console.log('dormindo...')
}

const PetMenu = () => {
  
  const nome = pet.nome;
  const especie = pet.especie;
  const genero = pet.genero;
  const fome = pet.fome;
  const saude = pet.saude;
  const felicidade = pet.felicidade;
  
  console.log('----- Pet -----')
  console.log('')
  console.log(`nome: ${nome}, ${especie} ${genero}`);
  console.log(`Fome: ${fome}% | Saude: ${saude}% | Felicidade: ${felicidade}%`);
  
}
function exibirMenu() {
  console.log('')
  console.log('\nMenu:');
  console.log('')
  console.log('1. alimentar | 2. brincar | 3. dormir | 4. sair');
  console.log('')
}

function iniciar() {
  
  PetMenu();
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