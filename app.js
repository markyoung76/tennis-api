const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "insert API key here!",
    "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
  },
};

let type = "atp";

// fetch(
//   `https://sportscore1.p.rapidapi.com/tennis-rankings/${type}?page=1`,
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

async function playerInfoDisplay() {
  const response = await fetch(
    `https://sportscore1.p.rapidapi.com/tennis-rankings/${type}?page=1`,
    options
  );
  const data = await response.json();

  console.log(data.data[0]);
  data.data.map(function () {
    let ph1 = document.querySelector("#ph1");
    let ph3 = document.querySelector("#ph3");
    let ph4 = document.querySelector("#ph4");
    let ph5 = document.querySelector("#ph5");
    let ph6 = document.querySelector("#ph6");
    let ph7 = document.querySelector("#ph7");
    let ph8 = document.querySelector("#ph8");
    let ph9 = document.querySelector("#ph9");
    ph1.innerHTML = `${data.data[0].ranking}`;
    ph3.innerHTML = `${data.data[0].team.name_short}`;
    ph4.innerHTML = `${data.data[0].team.name_full}`;
    ph5.innerHTML = `${data.data[0].team.gender}`;
    ph6.innerHTML = `${data.data[0].team.country}`;
    ph7.innerHTML = `${data.data[0].type}`;
    ph8.innerHTML = `${data.data[0].points}`;
    ph9.innerHTML = `${data.data[0].tournaments}`;
  });
}

async function playerProfilePhoto() {
  const response = await fetch(
    `https://sportscore1.p.rapidapi.com/tennis-rankings/${type}?page=1`,
    options
  );
  const data = await response.json();

  console.log(data.data[0].team.logo);
  let ph2 = document.querySelector("#ph2");
  ph2.style.backgroundImage = `url(${data.data[0].team.logo})`;
}

playerInfoDisplay();

playerProfilePhoto();
