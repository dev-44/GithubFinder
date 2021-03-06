import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()


//const GITHUB_URL = process.env.REACT_APP_GITHUB_URL               Went to GithubActiona
//const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    
    //NOW, WE USE REDUCERS
    /*const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)*/

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    //Get Initial Users (testing purposes)
    /*const fetchUsers = async () => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const data = await response.json()

        //setUsers(data)
        //setLoading(false)
        dispatch({
            type: 'GET_USERS',
            payload: data,
            loading: false
        })
    }*/

    /* NOT NECESSARY ANYMORE
    //Set Loading
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    //Clear Users
    /*const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }
    */

    return <GithubContext.Provider value={{
        //users,            with useState
        //loading,          with useState
        /*users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,*/
        ...state,           //Pass all the states at once
        dispatch,
        //searchUsers,      //Went to GithubActions
        //clearUsers,
        //getUser,          //Went to GithubActions
        //getUserRepos      //Went to GithubActions
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext