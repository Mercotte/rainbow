// document.body.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
//mettre une couleur au body
let valeurInit = getRandomInt();
document.body.style.background = '#' + valeurInit;
document.querySelector('.color').textContent = '#' + valeurInit;

// création d'un tableau de couleur

btn.addEventListener('click', function () {
  let valeur1 = getRandomInt();
  const btn = document.querySelector('.btn');
  document.body.style.background = '#' + valeur1;

  document.querySelector('.color').textContent = '#' + valeur1;
});

function getRandomInt() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
