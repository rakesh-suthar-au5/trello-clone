import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./redux/state";
import "./App.css"
import axios from "axios"


const user = localStorage.getItem('user')
axios.defaults.headers.post["AUTH"] = user;
axios.defaults.headers.get["AUTH"] = user;
axios.defaults.headers.put["AUTH"] = user;  
axios.defaults.headers.delete["AUTH"] = user;  
if(user){   
    store.dispatch({type:"uservalid"})
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
