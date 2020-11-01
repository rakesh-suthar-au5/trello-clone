import axios from "axios";

export const create_list = (data)=>{

    return (dispatch)=>{

        axios.post('/list/create',data).then((res)=>{
            dispatch({type:"create_a_list",data:res.data})
        }).catch((err)=>{
            dispatch({type:"err in create list"})
        })

    }

}

export const Load_lists = (id)=>{

    return (dispatch)=>{

        axios.post('/list/view',{id:id}).then((res)=>{
            dispatch({type:"load_lists",data:res.data})
        }).catch((err)=>{
            dispatch({type:"list_load_err"})

        })

    }

}
