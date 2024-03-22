// fetching filmdata
const filmUrl = "https://swapi.dev/api/films";

async function fetchFilmData() {
  try {
    const response = await fetch(filmUrl);

    if (!response.ok) {
      throw new Error("Failed response");
    }

    let filmData = await response.json();
    console.log(filmData);

    // extracting array with film detail data from the filmData object
    let films = filmData.results;
    console.log(films);
  } catch (error) {
    console.log(error);
  }
}

fetchFilmData();
