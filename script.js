function clean() {
  document.getElementById("body").innerHTML = `<p>Ask for characters</p>`;
}

async function showCharacters() {
  // name
  let nameInput = document.getElementById("name").value.toLowerCase();
  // house
  let house = document.getElementById("house").value;
  // year of birth
  let yearOfBirth = document.getElementById("yearOfBirth").value;

  if (house == 1 && nameInput == "" && yearOfBirth == "") {
    try {
      const res = await fetch(
        "https://hp-api.onrender.com/api/characters/house/gryffindor"
      );
      const characters = await res.json();
      let body = document.getElementById("body");
      body.innerHTML = "";
      characters.forEach((char) => {
        body.innerHTML += `<div class="card">
            <h4>${char.name}</h4>
            ${
              char.image == ""
                ? `<img src="img/missing_character.svg" alt="character image">`
                : `<img src="${char.image}" alt="character image">`
            }
            <p>House: ${char.house}</p>
            <p>Ancestry: ${char.ancestry}</p>
            <p>Date of birth: ${char.dateOfBirth}
            </div>`;
      });
    } catch (error) {
      document.getElementById("body").innerHTML =
        "<p>Error, try again later</p>";
    }
  } else if (house == 2 && nameInput == "" && yearOfBirth == "") {
    try {
      const res = await fetch(
        "https://hp-api.onrender.com/api/characters/house/slytherin"
      );
      const characters = await res.json();
      let body = document.getElementById("body");
      body.innerHTML = "";
      characters.forEach((char) => {
        body.innerHTML += `<div class="card">
            <h4>${char.name}</h4>
            ${
              char.image == ""
                ? `<img src="img/missing_character.svg" alt="character image">`
                : `<img src="${char.image}" alt="character image">`
            }
            <p>House: ${char.house}</p>
            <p>Ancestry: ${char.ancestry}</p>
            <p>Date of birth: ${char.dateOfBirth}
            </div>`;
      });
    } catch (error) {
      document.getElementById("body").innerHTML =
        "<p>Error, try again later</p>";
    }
  } else if (house == 3 && nameInput == "" && yearOfBirth == "") {
    try {
      const res = await fetch(
        "https://hp-api.onrender.com/api/characters/house/ravenclaw"
      );
      const characters = await res.json();
      let body = document.getElementById("body");
      body.innerHTML = "";
      characters.forEach((char) => {
        body.innerHTML += `<div class="card">
            <h4>${char.name}</h4>
            ${
              char.image == ""
                ? `<img src="img/missing_character.svg" alt="character image">`
                : `<img src="${char.image}" alt="character image">`
            }
            <p>House: ${char.house}</p>
            <p>Ancestry: ${char.ancestry}</p>
            <p>Date of birth: ${char.dateOfBirth}
            </div>`;
      });
    } catch (error) {
      document.getElementById("body").innerHTML =
        "<p>Error, try again later</p>";
    }
  } else if (house == 4 && nameInput == "" && yearOfBirth == "") {
    try {
      const res = await fetch(
        "https://hp-api.onrender.com/api/characters/house/hufflepuff"
      );
      const characters = await res.json();
      let body = document.getElementById("body");
      body.innerHTML = "";
      characters.forEach((char) => {
        body.innerHTML += `<div class="card">
            <h4>${char.name}</h4>
            ${
              char.image == ""
                ? `<img src="img/missing_character.svg" alt="character image">`
                : `<img src="${char.image}" alt="character image">`
            }
            <p>House: ${char.house}</p>
            <p>Ancestry: ${char.ancestry}</p>
            <p>Date of birth: ${char.dateOfBirth}
            </div>`;
      });
    } catch (error) {
      document.getElementById("body").innerHTML =
        "<p>Error, try again later</p>";
    }
  } else if (nameInput != "" && yearOfBirth == "") {
    try {
      document.getElementById("name").value = "";
      const res = await fetch("https://hp-api.onrender.com/api/characters");
      const characters = await res.json();
      let aux = [];
      let body = document.getElementById("body");
      characters.forEach((char) => {
        if (char.name.toLowerCase() == nameInput) {
          aux.push({
            name: char.name,
            house: char.house,
            ancestry: char.ancestry,
            dateOfBirth: char.dateOfBirth,
            image: char.image,
          });
        }
        body.innerHTML = "";
        if (aux.length > 0) {
          aux.forEach((char) => {
            body.innerHTML += `<div class="card">
            <h4>${char.name}</h4>
            ${
              char.image == ""
                ? `<img src="img/missing_character.svg" alt="character image">`
                : `<img src="${char.image}" alt="character image">`
            }
            <p>House: ${char.house}</p>
            <p>Ancestry: ${char.ancestry}</p>
            <p>Date of birth: ${char.dateOfBirth}
            </div>`;
          });
        } else {
          document.getElementById("body").innerHTML =
            "<p>There are no characters with those characteristics, try again.</p>";
        }
      });
    } catch (error) {
      document.getElementById("body").innerHTML =
        "<p>Error, try again later</p>";
    }
  } else if (nameInput == "" && yearOfBirth != "") {
    try {
      document.getElementById("yearOfBirth").value = "";
      const res = await fetch("https://hp-api.onrender.com/api/characters");
      const characters = await res.json();
      let aux = [];
      let body = document.getElementById("body");
      characters.forEach((char) => {
        if (char.yearOfBirth == yearOfBirth) {
          aux.push({
            name: char.name,
            house: char.house,
            ancestry: char.ancestry,
            dateOfBirth: char.dateOfBirth,
            image: char.image,
          });
        }
        body.innerHTML = "";
        if (aux.length > 0) {
          aux.forEach((char) => {
            body.innerHTML += `<div class="card">
                <h4>${char.name}</h4>
                ${
                  char.image == ""
                    ? `<img src="img/missing_character.svg" alt="character image">`
                    : `<img src="${char.image}" alt="character image">`
                }
                <p>House: ${char.house}</p>
                <p>Ancestry: ${char.ancestry}</p>
                <p>Date of birth: ${char.dateOfBirth}
                </div>`;
          });
        } else {
          document.getElementById("body").innerHTML =
            "<p>There are no characters with those characteristics, try again.</p>";
        }
      });
    } catch (error) {
      document.getElementById("body").innerHTML =
        "<p>Error, try again later</p>";
    }
  } else if (nameInput != "" && yearOfBirth != "") {
    try {
      const res = await fetch("https://hp-api.onrender.com/api/characters");
      const characters = await res.json();
      let aux1 = [];
      let aux2 = [];
      let body = document.getElementById("body");
      characters.forEach((char) => {
        if (char.name.toLowerCase() == nameInput) {
          aux1.push({
            name: char.name,
            house: char.house,
            ancestry: char.ancestry,
            dateOfBirth: char.dateOfBirth,
            image: char.image,
            yearOfBirth: char.yearOfBirth,
          });
        }
      });
      aux1.forEach((char) => {
        if (char.yearOfBirth == yearOfBirth) {
          aux2.push({
            name: char.name,
            house: char.house,
            ancestry: char.ancestry,
            dateOfBirth: char.dateOfBirth,
            image: char.image,
          });
        }
        body.innerHTML = "";
        if (aux2.length > 0) {
          aux2.forEach((character) => {
            body.innerHTML += `<div class="card">
                        <h4>${character.name}</h4>
                        ${
                          character.image == ""
                            ? `<img src="img/missing_character.svg" alt="character image">`
                            : `<img src="${character.image}" alt="character image">`
                        }
                        <p>House: ${character.house}</p>
                        <p>Ancestry: ${character.ancestry}</p>
                        <p>Date of birth: ${character.dateOfBirth}
                        </div>`;
          });
        } else {
          document.getElementById("body").innerHTML =
            "<p>There are no characters with those characteristics, try again.</p>";
        }
      });
    } catch (error) {
      document.getElementById("body").innerHTML =
        "<p>Error, try again later</p>";
    }
    document.getElementById("yearOfBirth").value = "";
    document.getElementById("name").value = "";
  } else {
    try {
      const res = await fetch("https://hp-api.onrender.com/api/characters");
      const characters = await res.json();
      let body = document.getElementById("body");
      characters.forEach((char) => {
        body.innerHTML += `<div class="card">
                    <h4>${char.name}</h4>
                    ${
                      char.image == ""
                        ? `<img src="img/missing_character.svg" alt="character image">`
                        : `<img src="${char.image}" alt="character image">`
                    }
                    <p>House: ${char.house}</p>
                    <p>Ancestry: ${char.ancestry}</p>
                    <p>Date of birth: ${char.dateOfBirth}
                    </div>`;
      });
    } catch (error) {
      document.getElementById("body").innerHTML =
        "<p>Error, try again later</p>";
    }
    document.getElementById("yearOfBirth").value = "";
    document.getElementById("name").value = "";
  }
}

async function showRandomCharacters() {
  try {
    let num = document.getElementById("num").value;
    let body = document.getElementById("body");
    let id = [];
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    const characters = await res.json();
    let min = 0;
    let max = characters.length;
    if (num < 1 || num > characters.length) {
      body.innerHTML = `<p>Use numbers from 1 to ${characters.length}</p>`;
    } else {
      for (let i = 1; i <= num; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("body").innerHTML = `<p>es ${randomNum}</p>`;
        id.push(randomNum);
      }
      body.innerHTML = "";
      id.forEach((ids) => {
        body.innerHTML += `<div class="card">
                      <h4>${characters[ids].name}</h4>
                      ${
                        characters[ids].image == ""
                          ? `<img src="img/missing_character.svg" alt="character image">`
                          : `<img src="${characters[ids].image}" alt="character image">`
                      }
                      <p>House: ${characters[ids].house}</p>
                      <p>Ancestry: ${characters[ids].ancestry}</p>
                      <p>Date of birth: ${characters[ids].dateOfBirth}
                      </div>`;
      });
    }
  } catch (error) {
    document.getElementById("body").innerHTML = "<p>Error, try again later</p>";
  }
  document.getElementById("num").value = "";
}
