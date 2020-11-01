import React from 'react';
import OpenBoard from "./component/displayboard";
import LoginBox from "./component/login";
import SignUpBox from "./component/signupbox";
import { BrowserRouter, Link, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { QueryParamProvider } from 'use-query-params';
import Navbar from "./component/navbar";
import authrequire from "./component/authHoc";
import auth_not_require from "./component/no_authHOC";
import BoradBox from "./component/Boardbox";

function App() {
  return (
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <DndProvider backend={Backend}>
          <div className="App">
            <Navbar></Navbar>
            <div className="main_body">
              <Route path="/login" component={auth_not_require(LoginBox)}></Route>
              <Route path="/" component={auth_not_require(SignUpBox)} exact></Route>
              <Route path="/board" component={authrequire(BoradBox)} exact></Route>
              <Route path="/board/:id" component={authrequire(OpenBoard)} exact></Route>
            </div>

          </div>
        </DndProvider>
      </QueryParamProvider>
    </BrowserRouter>
  );
}

export default App;
