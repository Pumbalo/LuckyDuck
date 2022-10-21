// Får tag i Menu och radio knappar
let meny = document.getElementById("menu");
let checkboxes = document.querySelectorAll("#check");
let price = document.querySelectorAll("#price");

let sorting = "";

for (var i = 0, max = checkboxes.length; i < max; i++) {
  checkboxes[i].onclick = (e) => {
    meny.innerHTML = "";
    CheckData(e.target.value);
  };
}

for (var i = 0; i < 2; i++) {
  price[i].onclick = (e) => {
    sorting = e.target.value;
    CheckData(sorting);
  };
}

function CheckData(typeFood) {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const menu = data["menuItems"];

      menu.sort(function (a, b) {
        if (sorting.toLowerCase() === "increase") {
          meny.innerHTML = "";
          return a.price - b.price;
        } else {
          meny.innerHTML = "";
          return b.price - a.price;
        }
        return;
      });

      menu.forEach((item) => {
        if (item["allergyTypes"] === typeFood) return;
        WriteData(item);
      });
    })
    .catch((error) => console.log(error));
}

function WriteData(item) {
  meny.innerHTML += `
  <div class="menuOptions">
    <p class="title">${item["title"]}</p>
    <p class="description">${item["description"]}</p>
    <p class="allergy">Allergier: ${item["allergyTypes"]}</p>
    <p class="price">Pris: ${item["price"]}kr</p>
  </div>
`;
}

window.addEventListener("load", () => {
  CheckData();
});
