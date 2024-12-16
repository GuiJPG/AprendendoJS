function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    iniciaCal() {
      this.clickBtn();
      this.keyboardEnter();
    },

    keyboardEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.EqualSum();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },

    EqualSum() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta Invalida");
          return;
        }
        this.display.value = conta;
      } catch (e) {
        alert("Conta Invalida");
        return;
      }
    },

    clickBtn() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnDisplay(el.innerText);
        }
        if (el.classList.contains("btn-cl")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.deleteNumber();
        }
        if (el.classList.contains("btn-eq")) {
          this.EqualSum();
        }
      });
    },

    btnDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.iniciaCal();
