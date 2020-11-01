import axios from "axios"


export const create_board = (data) => {

    return (dispatch) => {


        axios.post("/board/create", data).then((res) => {
            dispatch({ type: "create board", data: res.data })
        }).catch((err) => {
            window.location.href = "/board?error=true"
        })


    }
}

export const Load_board_data= ()=>{
    

    return (dispatch)=>{

        axios.get("/board/view").then((data)=>{
            dispatch({type:"load_board",data:data})
        }).catch((err)=>{
            console.log(err)
            // window.location.href = '/board?load_err=true'
        })

    }
}

