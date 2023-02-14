const newyear = "11 Sep 2023"

const DaysHTML = document.getElementById("days")
const HoursHTML = document.getElementById('hours')
const MinutesHTML = document.getElementById('minutes')
const SecondsHTML = document.getElementById('seconds')
const footer = document.getElementById('footer')

function countdown(){
    let currentDate = new Date()
    let newDate = new Date(newyear)

    let TimeLeft= Math.floor((newDate - currentDate) / 1000)
    let seconds= Math.floor((newDate - currentDate) / 1000) % 60
    let minutes = Math.floor(TimeLeft/60) % 60;
    let hours = Math.floor(TimeLeft/60/60) % 24;
    let Days = Math.floor(TimeLeft/60/60/24)


    DaysHTML.innerHTML = Days
    HoursHTML.innerHTML = formatTime(hours)
    MinutesHTML.innerHTML = formatTime(minutes)
    SecondsHTML.innerHTML = formatTime(seconds)
    footer.innerHTML = currentDate

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown,1000);