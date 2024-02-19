class Animal {
  constructor(especie, genero){
    this.especie = especie;
    this.genero = genero;
    this.build();
  }

  build(){
    this.fome = 30;
    this.saude = 100;
    this.felicidade = 100;
    this.loopID = null;
    this.setLoop();
  }

  setLoop(){
    this.loopID = setInterval(() => {
      this.fome = this.fome + 10;
      this.saude = this.saude - 10;
      if(this.saude <= 50){
        this.felicidade = this.felicidade - 10;
      }
    }, 10000)
  }

}

class Pet extends Animal {

  constructor(especie, genero, nome){
    super(especie, genero);
    this.nome = nome;
  }

  carinho(){
    this.felicidade = this.felicidade + 30;
  }

  alimentar(){
    this.fome = this.fome + 10;
  }

  brincar(){
    this.felicidade = this.felicidade + 10;
  }

  curar(){
    this.saude = this.saude + 10;
  }

}

module.exports = { Pet };