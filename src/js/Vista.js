const d = document;

class Vista {
  posicionCarrusel = 0;

  $btnPrev = d.querySelector(`[data-btn="prev"]`);
  $btnNext = d.querySelector(`[data-btn="next"]`);
  $containerCarrusel = d.querySelector(`[data-carrusel]`);
  $btnsControles = Array.from(d.querySelectorAll(`[data-btn="control"]`));

  inicializarPosicion() {
    this.$containerCarrusel.dataset.posicion = this.posicionCarrusel;
    this.$btnsControles[this.posicionCarrusel].classList.replace(
      "fa-regular",
      "fa-solid"
    );
  }
  posicionAnterior() {
    if (this.posicionCarrusel === 0) {
      this.posicionCarrusel = this.$btnsControles.length;
    }
    this.posicionCarrusel--;
  }
  posicionSiguiente() {
    if (this.posicionCarrusel >= this.$btnsControles.length - 1) {
      this.posicionCarrusel = -1;
    }
    this.posicionCarrusel++;
  }
  render() {
    this.$containerCarrusel.style.transform = `translateX(${
      -25 * this.posicionCarrusel
    }%)`;

    this.$btnsControles.forEach((el, i) => {
      if (i === this.posicionCarrusel) {
        el.classList.replace("fa-regular", "fa-solid");
      } else {
        el.classList.replace("fa-solid", "fa-regular");
      }
    });
  }

  cambiarDiapositiva(index) {
    this.posicionCarrusel = index;
  }
}

const vista = new Vista();

export { vista };
