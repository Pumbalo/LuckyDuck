let meny = document.getElementById("menu");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const menu = data["menuItems"];
    menu.forEach((item) => {
      meny.innerHTML += `
      <div class="menuOptions">
            <p class="title">${item["title"]}</p>
            <p class="description">${item["description"]}</p>
            <p class="allergy">Allergier: ${item["allergyTypes"]}</p>
            <p class="price">Pris: ${item["price"]}kr</p>

        `;
    });
  })
  .catch((error) => console.log(error));
