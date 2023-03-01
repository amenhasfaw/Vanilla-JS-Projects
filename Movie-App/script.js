const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main = document.getElementById('movies');

getMovies(APIURL)

async function getMovies(url){
    const resp = await fetch(url);
    const response = await resp.json();

    console.log(response.results)

    response.results.forEach(movie => {
       const {title, poster_path, vote_average, overview } = movie

       const movieEL = document.createElement('div')
       movieEL.classList.add('main')

       movieEL.innerHTML = `
       <img src="${IMGPATH + poster_path}" alt="">
       <div id="movie-info">
           <h2>${title}</h2>
           <span>${vote_average}</span>
       </div>
       
       `

       main.appendChild(movieEL)

    
    });
}