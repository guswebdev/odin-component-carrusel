import { modelo } from "./Modelo";
import { vista } from "./Vista";

class Controlador {
  DOMContentLoaded() {
    vista.inicializarPosicion();
    setInterval(() => {
      vista.posicionSiguiente();
      vista.render();
    }, 5000);
  }
  click(e) {
   
    if (e.target.dataset.btn === vista.$btnPrev.dataset.btn) {
     
      vista.posicionAnterior();
      vista.render();
    }
    if (e.target.dataset.btn === vista.$btnNext.dataset.btn) {
     
      vista.posicionSiguiente();
      vista.render();
    }

    if (vista.$btnsControles.includes(e.target)) {
      const index = vista.$btnsControles.indexOf(e.target);

      vista.cambiarDiapositiva(index);
      vista.render();
    }
    
  }
  
}

const controlador = new Controlador();

document.addEventListener("DOMContentLoaded", controlador.DOMContentLoaded);
document.addEventListener("click", controlador.click);

export { controlador };
