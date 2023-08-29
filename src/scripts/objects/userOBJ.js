const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(eventList) {
        const createAndPushEvents = eventList.filter( 
            event => event.type === 'CreateEvent' || event.type === 'PushEvent'
        )
        this.events = createAndPushEvents.slice(0, 10)
    }
}


export {user}