import axios from 'axios'

const URI = "https://api.github.com/"


export const FetchUser = async(userName)=>{
    const userData = await axios.get(`${URI}/users/${userName}`)
    console.log(userData)
    return userData
}

export const FetchRepos = async(userName)=>{
    const repositories = await axios.get(`${URI}/users/${userName}/repositories`)

    console.log(repositories)
    return repositories
}