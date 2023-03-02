const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const mainEL = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("input");

let city = ''

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


form.addEventListener('submit', async (e) => {
    e.preventDefault()

    city = search.value

    await getWeather(city)

    search.value = ''
})

async function getWeather(city){
    const res = await fetch(url(city))
    const data = await res.json()

    showData(data)
}

function showData(data){
    const{cod} = data
    const {main,name} = data

    if(cod === 200){
        const newEL = document.createElement('div')
        newEL.classList.add('weather')

        temp = ktoc(main.temp) 

        newEL.innerHTML = `

            <div id="temp">
                <img src="https://cdn-icons-png.flaticon.com/512/1684/1684375.png" alt="">
                <h1>${temp}℃</h1>
                <img src="https://cdn-icons-png.flaticon.com/512/1684/1684375.png" alt="">
            </div>
            <h2 id="city-name">${name}</h2>
    
        `
        mainEL.innerHTML = ''
        mainEL.appendChild(newEL)
    }

    if(cod === "404"){

        const newEL = document.createElement('div')
        newEL.classList.add('no-data')

        newEL.innerHTML = `
            <h3>🚫 CITY NOT FOUND 🚫</h3>
        `

        mainEL.innerHTML = ''
        mainEL.appendChild(newEL)

    }

    


}


function ktoc(temp){
    return Math.floor(temp - 273.15)
}