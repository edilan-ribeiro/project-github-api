import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { user } from "./objects/userOBJ.js"
import { screen } from "./objects/screen.js"
import { getEvents } from "./services/events.js"


document.getElementById('btn-search').addEventListener('click', ()=>{
    let userName = document.getElementById('input-search').value
        if(validadeEmptyInput(userName)) {
            return
        }
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) =>{
   const userName = e.target.value
   const key = e.which || e.keyCode
   const isEnterKeyPressed = key === 13
   if (isEnterKeyPressed) {
        if(validadeEmptyInput(userName)) {
            return
        }
        getUserData(userName)
   }
})

function validadeEmptyInput(UserName) {
    if (UserName.length === 0 ) {
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)

    const eventsResponse = await getEvents(userName)
    
    const followersCount = userResponse.followers
    const followingCount = userResponse.following
   
    
   


    if (userResponse.message === 'Not Found') {
        screen.renderNotFound()
        return
    }

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setFollowers(followersCount)
    user.setFollowing(followingCount)
    user.setEvents(eventsResponse)
    
    screen.renderUser(user)
  
}

