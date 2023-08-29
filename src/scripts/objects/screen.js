const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){

        const userFollowers = user.followers || 'Sem seguidores'
        const userFollowing = user.following || 'Não está seguindo ninguém'

        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="foto do perfil do usuário"/>
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrado 😢'}</p> </br>
                    <p>Seguidores: ${userFollowers}</p>
                    <p>Seguindo: ${userFollowing}</p>
                </div>
            </div>`

            let repositoriesItems = ''
            user.repositories.forEach(repo => {
                let language = repo.language

                if (language === null) {
                    language = 'API não retornou uma linguagem!'
                }
                    repositoriesItems += `
                                          <li>
                                              <a href="${repo.html_url}" target="_blank">${repo.name}
                                                  <ul>
                                                      <li><p>🍴 ${repo.forks_count} </p></li>
                                                      <li><p>🌟 ${repo.stargazers_count} </p></li>
                                                      <li><p>👀 ${repo.watchers_count} </p></li>
                                                      <li><p>🧾 ${language} </p></li>
                                                  </ul>
                                              </a>
                                          </li>`})

                let repoEvents = ''
                user.events.map(repoEvent => {
                  const name = repoEvent.repo.name ?? '⚠ Sem nome de repositório disponível'
                  const message = repoEvent.payload.commits?.[0]?.message ?? '⚠ Não há mensagem de commit!'
                  repoEvents += `<li>▶ ${name} - ${message}</li>`
                })
                
                if (user.repositories.length > 0) {
                    this.userProfile.innerHTML += `
                      <div class="repositories section">
                        <h2>Repositórios</h2>
                        <ul>${repositoriesItems}</ul>
                      </div>`
                  
                    if (repoEvents.length > 0) {
                      this.userProfile.innerHTML += `
                        <div class="events section">
                          <h2>Eventos de repositório</h2>
                          <ul>${repoEvents}</ul>
                        </div>`
                    } else {
                      this.userProfile.innerHTML += `
                        <div class="events section">
                          <h2>Não há eventos de repositório disponíveis para mostrar.</h2>
                        </div>`
                    }
                  }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado<h3>"
    }
}

export {screen}