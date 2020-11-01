import axios from "axios";
const app_actions = {}


app_actions.create_list = (data)=>{
    return{
        type:"create_list",
        data:data
    }
}

app_actions.create_card = (data)=>{
    return{
        type:"create_card",
        data:data
    }
}

app_actions.edit_card = (data)=>{
    return{
        type:"edit_card",
        data:data
    }

}

app_actions.move_card = (data)=>{
    return{
        type:"move_card",
        data:data
    }

}



export default app_actions;