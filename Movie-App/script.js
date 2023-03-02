const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
let IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const ALT_POSTER = "https://ih1.redbubble.net/image.1027712254.9762/fposter,small,wall_texture,product,750x1000.u2.jpg";

const main = document.getElementById('movies');
const form = document.getElementById('form');
const input = document.getElementById('input');

getMovies(APIURL)

async function getMovies(url){
    const resp = await fetch(url);
    const response = await resp.json();


    response.results.forEach(movie => {
       const {id, title, vote_average, overview, release_date } = movie
       let {poster_path} = movie



       const movieEL = document.createElement('div')
       movieEL.classList.add('main')

       if(poster_path == null){
        poster_path = ALT_POSTER
        IMGPATH = ""
       }


       movieEL.innerHTML = `
       <img id='${id}' src="${IMGPATH + poster_path}">
       <div id="movie-info">
           <h2>${title}</h2>
           <span>${vote_average.toFixed(1)}</span>
       </div>
       <div id='overview'>
       <h4>Overview<h4>
       ${overview}
       <h4>Released: ${release_date}<h4>
       </div> 
       `

       main.appendChild(movieEL)
    
    });
}


form.addEventListener('submit' , (e) => {
    e.preventDefault();

    const searchTerm = SEARCHAPI + input.value
    main.innerHTML = ''
    getMovies(searchTerm)
    
    
    
    input.value = ''
})
