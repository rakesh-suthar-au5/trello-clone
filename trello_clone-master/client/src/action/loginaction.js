import axios from "axios"

export const login = (data, history) => {

    return (dispatch) => {
        axios.post("/users/login", data).then((data) => {
            dispatch({ type: "uservalid" })
            localStorage.setItem('user',data.data.token)
            history.push('/board')
            console.log("login success", data)
        }).catch((err) => {
            console.log("login failsed")
            history.push('/login?wrong_details=true')
            dispatch({ type: "invalid user"})
        })
    }
}

