// Import stylesheets
import './style.css';

// Write Javascript code!
const botao = document.getElementById('btnClique');

botao.addEventListener('click', FnRolardados);

function FnRolardados() {
   return Math.random() * 6;
}
