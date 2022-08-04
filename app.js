const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "insert api key here",
    "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
  },
};

let type = "atp";

fetch(
  `https://sportscore1.p.rapidapi.com/tennis-rankings/${type}?page=1`,
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
