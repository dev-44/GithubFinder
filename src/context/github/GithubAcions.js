import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`
    }
})

//Search Users
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text
    })

    /*const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    const {items} = await response.json()*/

    /*dispatch({
        type: 'GET_USERS',
        payload: items,
    })*/

    //return items
    
    const response = await github.get(`/search/users?${params}`)
    return response.data.items

}

/*
//Get single user
export const getUser = async (login) => {
    //setLoading()

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    if (response.status === 404) {
        window.location = '/notfound'
    } else {
        const data = await response.json()

        //dispatch({
        //    type: 'GET_USER',
        //    payload: data,
        //})

        return data
    }

}

//Get Users Repos
export const getUserRepos = async (login) => {
    //setLoading()

    const params = new URLSearchParams({
        sort: 'latest',
        per_page: 10
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    const data = await response.json()

    //dispatch({
    //    type: 'GET_REPOS',
    //    payload: data,
    //})

    return data
}
*/

//Get user and repos
export const getUserAndRepos = async(login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return {user: user.data, repos: repos.data}
}