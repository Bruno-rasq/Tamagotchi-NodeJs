const readline = require('readline');
const { Pet } = require('./Classes.js');
const { rabbit, cat, duck } = require('./Draw.js')

let pet;
let petImage;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// run code...
criarNovoPet();

function configPetImage(){
  switch(pet.especie){
    case 'Rabbit':
      petImage = rabbit;
      break;
    case 'Cat':
      petImage = cat;
      break;
    case 'Duck':
      petImage = duck;
      break;
  }
}

function configPet(){

  return new Promise((resolve) => {
    rl.question('Qual é o nome do Pet? ', (nome) => {
      
      rl.question('Qual é a espécie do Pet? ', (especie) => {
        
        configPetImage();
        
        rl.question('Qual é o gênero do Pet? ', (genero) => {
          //rl.close();
          resolve({ nome, especie, genero });
        });
      });
    });
  });
  
}

async function criarNovoPet(){
  const respostas = await configPet();
  pet = new Pet(respostas.nome, respostas.especie, respostas.genero);
  
  console.clear()
  console.log('Novo Pet criado:');
  iniciar();
}

function Alimentar(){
  console.log('alimentando...')
  pet.alimentar();
}

function Brincar(){
  console.log('brincando...')
  pet.brincar();
}

function Curar(){
  console.log('dormindo...')
  pet.curar();
}

function PetMenu(){
  
  console.log('----- Pet -----')
  console.log('')
  console.log(petImage)
  console.log('')
  console.log(`nome: ${pet.nome}, ${pet.especie} ${pet.genero}`);
  console.log(`Fome: ${pet.fome}% | Saude: ${pet.saude}% | Felicidade: ${pet.felicidade}%`);
  
}

function exibirMenu(){
  console.log('')
  console.log('\nMenu:');
  console.log('')
  console.log('1. alimentar | 2. brincar | 3. cura | 4. sair');
  console.log('')
}

function iniciar(){
  
  PetMenu();
  exibirMenu();
  MenuOpcoes();
  
}

function MenuOpcoes(){
  rl.question('Escolha uma opção: ', (opcao) => {

    switch (opcao) {
      case '1':
        Alimentar();
        break;
        
      case '2':
        Brincar();
        break;

      case '3':
        Curar();
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