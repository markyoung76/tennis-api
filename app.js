const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "insert API key here!",
    "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
  },
};

let type = "atp";

async function playerInfoDisplay() {
  const response = await fetch(
    `https://sportscore1.p.rapidapi.com/tennis-rankings/${type}?page=1`,
    options
  );
  const data = await response.json();

  const inputNumberValue = document.querySelector("#search-input");
  inputNumberValue.addEventListener("input", (e) => {
    console.log(e.target.value);
    const searchedRank = e.target.value;
    let num = searchedRank - 1;

    data.data.map(function () {
      let ph1 = document.querySelector("#ph1");
      let ph2 = document.querySelector("#ph2");
      let ph3 = document.querySelector("#ph3");
      let ph4 = document.querySelector("#ph4");
      let ph5 = document.querySelector("#ph5");
      let ph6 = document.querySelector("#ph6");
      let ph7 = document.querySelector("#ph7");
      let ph8 = document.querySelector("#ph8");
      let ph9 = document.querySelector("#ph9");
      ph1.innerHTML = `${data.data[num].ranking}`;
      ph2.style.backgroundImage = `url(${data.data[num].team.logo})`;
      ph3.innerHTML = `${data.data[num].team.name_short}`;
      ph4.innerHTML = `${data.data[num].team.name_full}`;
      ph5.innerHTML = `${data.data[num].team.gender}`;
      ph6.innerHTML = `${data.data[num].team.country}`;
      ph7.innerHTML = `${data.data[num].type}`;
      ph8.innerHTML = `${data.data[num].points}`;
      ph9.innerHTML = `${data.data[num].tournaments}`;
    });
  });
}

let button = document.querySelector("#search-btn");
button.addEventListener("click", playerInfoDisplay);

playerInfoDisplay();
