//GetValueAndAdd

var btn = document.getElementById("btn");

var stock = [];

btn.addEventListener("click", function () {
  var input = document.getElementById("valeur").value;

  var list = document.getElementById("liste");

  var li = document.createElement("li");

  //

  stock.push(input);

  list.appendChild(li);

  //li

  li.innerHTML =
    ' <button><img src="images/png-clipart-arrow-computer-icons-up-and-down-angle-triangle.png"/></button><p>' +
    input +
    '</p><div class="boutons"><button><img src="images/check-icon-png-14.jpg" /></button><button class="edition"><img src="images/kisspng-clip-art-portable-network-graphics-computer-icons-edit-svg-png-icon-free-download-548172-online-5b6adf091cc7a1.0851009615337305691179.jpg"/></button><button class="supprimer"><img src="images/kisspng-computer-icons-icon-design-delete-button-5abcecfee7b8e6.5542925815223308789491.jpg"/></button></div>';

  //Mathieu

  var edition = document.querySelectorAll(".edition"); //selection des bouton d'edition
  var liste = document.querySelectorAll("p");
  var lib = document.querySelectorAll("li");
  var suppr = document.querySelectorAll(".supprimer"); //suppresion des bouton

  // bouton modifier start
  edition.forEach((item, index) => {
    // here
    item.addEventListener("click", () => {
      let a = "";
      liste[index].textContent = "";
      liste[index].innerHTML = '<input id = "inputmodif" type="text">';
      liste[index].addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          if (document.querySelector("#inputmodif") != null) {
            a = document.querySelector("#inputmodif").value;
            console.log(index);
            liste[index].innerHTML = a;
            edition = document.querySelectorAll(".edition");
          }
        }
      });
    });
  });
  // bouton modifier end

  //bouton delete debut
  suppr.forEach((item, index1) => {
    item.addEventListener("click", () => {
      lib[index1].remove();
    });
  });
  // bouton delete fin
});
