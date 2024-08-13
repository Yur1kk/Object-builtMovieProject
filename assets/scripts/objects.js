const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const titleInput = document.getElementById("title");
const extraNameInput = document.getElementById("extra-name");
const extraValueInput = document.getElementById("extra-value");

const inputs = [titleInput, extraNameInput, extraValueInput];

const movies = [];

const clearMovieInput = () => {
  for (const input of inputs) {
    input.value = "";
  }
};

const renderMovies = () => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = titleInput.value;
  const extraName = extraNameInput.value;
  const extraValue = extraValueInput.value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
  clearMovieInput();
};

addMovieBtn.addEventListener("click", addMovieHandler);
