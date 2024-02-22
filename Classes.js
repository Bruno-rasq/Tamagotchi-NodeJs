class Animal {
  
  constructor(especie, genero){
    this.especie = especie;
    this.genero = genero;
    this.build();
  }

  build(){
    this.vivo = true;
    this.fome = Math.round(Math.random() * 50);
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
      this.morte();
    }, 10000)
  }

}

class Pet extends Animal {

  constructor(especie, genero, nome){
    super(especie, genero);
    this.nome = nome;
  }

  alimentar(){
    this.fome = this.fome - 10;
  }

  brincar(){
    this.felicidade = this.felicidade + 10;
  }

  curar(){
    this.saude = this.saude + 10;
  }

  morte(){
    if(this.saude <= 0 || 
       this.felicidade <= 0 || 
       this.fome > 100){
      console.log('Seu pet morreu!');
      this.vivo = false;
      clearInterval(this.loopID);
      rl.close();
    }
    return this.vivo;
  }

}

module.exports = { Pet };