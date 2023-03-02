const APIURL = "https://api.github.com/users/";

const input = document.getElementById('input')
const form = document.getElementById('form')
const main = document.getElementById('main')
let statuscode = 0



form.addEventListener('submit', (e) => {
    e.preventDefault()

    getUser(APIURL + input.value)
})

async function getUser(url){
    const res = await fetch(url);
    statuscode = res.status
    const user = await res.json()
    
    generateProfile(user)

}

function generateProfile(user){

    
        if(statuscode === 404 ){
            const message = document.createElement('div')
            message.classList.add('no-user')
    
            message.innerHTML = `
            
                  <h4>USER NOT FOUND</h4>
    
            `
    
            main.innerHTML = ''
            main.appendChild(message)
    
            input.value = ''
    
        }
        if(statuscode === 200){
    
    
            const profile = document.createElement('div')
            profile.classList.add('user')
    
            profile.innerHTML = `
            
            <img src="${user.avatar_url}" alt="">
            <a href="${user.html_url}">@${user.login}</a>
    
            `
    
            main.innerHTML = ''
            main.appendChild(profile)
    
            input.value = ''
    
        }
    
}


