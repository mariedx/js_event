//1. lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.

let footerEl = document.getElementsByTagName("footer")[0];
footerEl.addEventListener("click", function() {
  console.log("clique");
})

//1bis. Lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

countClick = 0
document.getElementsByTagName("footer")[0];
footerEl.addEventListener("click", function() {
  countClick ++;
  console.log("clique" + countClick);
})

//2. Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader.

function toggleMenu() {
  let btnMenu = document.querySelector(".navbar-toggler")
  var elt = document.querySelector("#navbarHeader");

  var onTogglerClick = function() {
    elt.classList.toggle("collapse");
  };

  btnMenu.addEventListener("click", onTogglerClick);
}

toggleMenu();

//3. Si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !
//Indice : Commence par bien pointer sur la première card en entier (stocke-la dans une variable puis affiche-la en console pour confirmer que tu l'as bien pointé).
//Puis pointe vers le bouton Edit de cette card (idem : stocke-le dans une variable et affiche-le en console).
//Une fois que ça c'est bien fait, tu peux facilement rajoute un style ="color: red" au texte de la card !

  function textRed() {
    let firstCard = document.getElementsByClassName("card-body")[0];
    console.log(firstCard)
    let btnEdit = firstCard.getElementsByTagName("button")[1];
    console.log(btnEdit)
    
    btnEdit.addEventListener("click", function() {
      firstCard.style = "color: red";
    })
  }
  textRed()

//4. On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.

function textGreen() {
  let secondCard = document.getElementsByClassName("card-body")[1];
  console.log(secondCard)
  let btnEdit = secondCard.getElementsByTagName("button")[1];
  console.log(btnEdit)

  let onEditClick = function() {
    if (secondCard.style.color === ''){
      secondCard.style.color = 'green';
    } else {
      secondCard.style.color = '';
    }
  }
  btnEdit.addEventListener("click", onEditClick);  
}
textGreen()

//5. Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

function removeBootstrap() {
  let navBar = document.querySelector('header');
  
  navBar.addEventListener('dblclick', () => {
    if (document.styleSheets[0].disabled === true){
      document.styleSheets[0].disabled = false;
    } else {
      document.styleSheets[0].disabled = true;
    }
  })
}
removeBootstrap()

//6 Si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

  let btnView = document.getElementsByClassName("btn-success");

  for (let i = 0; i < btnView.length; i++) {
    var minimizeCard = function () {
      let cardText = document.getElementsByClassName("card-text")[i];
      let cardImage = document.getElementsByClassName("card-img-top")[i];

      if (cardText.style.display == "none"){
        cardText.style.display = "";
      }
      else
      {
        cardText.style.display = "none";
      }

      if (cardImage.style.width == "20%"){
        cardImage.style.width = "";
      }
      else
      {
        cardImage.style.width = "20%";
      }
    }
    btnView[i].addEventListener("mouseover",minimizeCard);
  }

