function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) {
        this.addNumDisplay(el);
      }
      if (el.classList.contains("btn-cl")) {
        this.clear();
      }
      if (el.classList.contains("btn-del")) {
        this.delete();
      }
      if (el.classList.contains("btn-eq")) {
        this.sum(el);
      }
    });
  };

  this.capturaEnter = () => {
    this.display.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        this.sum();
      }
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => {
    this.display.value = "";
  };

  this.delete = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.sum = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert("Conta invalida");
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert("Conta Invalida");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
