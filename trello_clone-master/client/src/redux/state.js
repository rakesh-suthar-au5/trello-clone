import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"

var ini_state = {
    lists: [],
    cards: [],
    user: [],
    boards:[],
    userAuthenticated: false,
    error:''
}

const appreducer = (state = ini_state, action) => {
    let statecopy = JSON.parse(JSON.stringify(state))
    console.log(action)
    switch (action.type) {
        case "create_a_card":
            statecopy.cards.push(action.data)
            return statecopy
        case "uservalid":
            statecopy.userAuthenticated = true
            return statecopy
        case "invalid user":
            statecopy.userAuthenticated = false
            return statecopy
        case "create board":
            statecopy.boards.push(action.data)
            console.log(statecopy,'this is state coply ==>>')
            return statecopy
        case "load_board":
            statecopy.boards=action.data.data
            return statecopy
        case "load_lists":
            statecopy.lists=action.data
            return statecopy
        case "load_cards":
            statecopy.cards = [...statecopy.cards,...action.data] 
            return statecopy
        case "create_a_list":
            statecopy.lists.push(action.data)
            return statecopy
        case "Edit_card":
            statecopy.cards[action.index]=action.data
            return statecopy
        case "delete_card":
            statecopy.cards.splice(action.data,1)
            return statecopy
        case "move_card":
            statecopy.cards[action.card_index].list_id = action.data
            return statecopy
        default:
            return statecopy

    }

}


const store = createStore(appreducer, applyMiddleware(thunk))

export default store;