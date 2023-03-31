
const gerarNumeroBtn = document.getElementById('Rolardado');
const numeroGeradoH1 = document.getElementById('resultado');
gerarNumeroBtn.addEventListener('click', () => {
  const DadosRolados = Math.floor(Math.random() * 6) + 1;
  numeroGeradoH1.innerText = `Numero Gerado: ${DadosRolados}`;
});

