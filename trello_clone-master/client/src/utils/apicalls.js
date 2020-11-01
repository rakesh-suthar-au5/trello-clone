import axios from "axios";
import { useDispatch } from "react-redux";



const api_calls = {}

api_calls.signup = async (data) => {

    try {
        var signup = await axios.post("/users/create", data)
        window.location.href = "/login?signup=true"
    } catch (error) {
        console.log(error)
        window.location.href = "/?duperr=true"
    }
}


api_calls.login = async(data)=>{

    try {
        var login = await axios.post("/users/login",data)
        console.log("login success",login)
    } catch (error) {
        console.log(error)
        window.location.href = '/login?wrong_details=true'
    }

}

export default api_calls

