const form_validation = {}



form_validation.signup_validation = (name, email, password, c_password) => {
    const error = {}
    const email_rex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    name === "" ? error.name = true : error.name = false
    email_rex.test(email) ? error.email = false : error.email = true
    password !== c_password || password === "" ? error.password = true : error.password = false
    return error
}

form_validation.login_validation = (email, password) => {
    const error = {}
    const email_rex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    password == "" ? error.password = true : error.password = false
    email_rex.test(email) ? error.email = false : error.email = true
    return error
}


export default form_validation