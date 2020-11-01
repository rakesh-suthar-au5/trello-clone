import axios from "axios"


export const create_card = (data) => {


    return (dispatch) => {

        axios.post('/card/create', data).then((res) => {
            dispatch({ type: "create_a_card", data: res.data })
        }).catch((err) => {
            dispatch({ type: "create_card_err" })
        })

    }

}

export const load_cards = (id) => {


    return (dispatch) => {

        axios.get('/card/view', {
            params: {
                id: id
            }
        }).then((res) => {
            console.log(res)
            dispatch({ type: "load_cards", data: res.data })
        }).catch((err) => {
            dispatch({ type: "card_load_err" })
        })

    }
}

export const Edit_card = (data, index) => {
    return (dispatch) => {
        axios.put('/card/edit', data).then((res) => {
            dispatch({ type: "Edit_card", data: res.data[1], index: index })
        }).catch(() => {
            dispatch({ type: "err_in_card_edit" })
        })
    }
}

export const delete_card = (id, index) => {

    return (dispatch) => {
        axios.delete('/card/delete', {
            params: {
                id: id
            }
        }).then((res) => {
            dispatch({ type: "delete_card", data: index })
        }).catch((err) => {
            dispatch({ type: "card_delete_err" })
        })

    }

}

export const move_card = (c_id, c_ind, l_id) => {
    return (dispatch) => {
        axios.put('/card/move',{card:c_id,list:l_id}).then((res)=>{
            dispatch({type:"move_card",data:l_id,card_index:c_ind})
        }).catch((err)=>{
            console.log(err)
            dispatch({type:"err_in_card_move"})
        })

    }

}