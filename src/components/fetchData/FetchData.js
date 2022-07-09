import axios from 'axios'

const URI = "https://api.github.com/"

export const FetchUser = async (userName)=>{
    try {
        const { data } = await axios.get(`${URI}users/${userName}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const FetchRepos = async (userName)=>{
    try {
        const { data } = await axios.get(`${URI}users/${userName}/repos?per_page=100"`)
        return data
    } catch (error) {
        console.log(error)
    }
}