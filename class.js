class Foo {
  color = 'negro';
  peso = 34;
  ver() {
    console.info(`Color: ${this.color}. Peso: ${this.peso}`
    );

  }
} class Bar {
  miMetodo() {
    if (this.imprimir) {
      console.info('Imprimir!');
      imprimir = true;
    }
  }
}

// Agregar property "imprimir=true" para que "miMetodo()" se ejecute.
