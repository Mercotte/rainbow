//mettre une couleur au body
document.body.style.background = 'orange';
document.querySelector('.color').textContent = 'orange';
// création d'un tableau de couleur

btn.addEventListener('click', function () {
  let color = ['red', 'blue', 'green', 'yellow'];
  let valeurCouleur = color[getRandomInt(color.length)];
  const btn = document.querySelector('.btn');
  document.body.style.background = valeurCouleur;
  document.querySelector('.color').textContent = valeurCouleur;
});
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
