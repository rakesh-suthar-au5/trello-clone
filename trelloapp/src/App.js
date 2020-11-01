import React, { Fragment } from 'react';
import './App.css';



import Board from './Components/Board';
import Homepage from './Components/Homepage';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import List from './Components/List'

class App  extends React.Component {



// componentDidUpdate=()=>{
//   this.props.getLists();
// }
  
  render() {
    return (
      <BrowserRouter>
        <Fragment >
          {/* <Header /> */}
          <Link to="/" />
          <Route path="/" exact component={Homepage} />
          <Route path="/dashboard" exact component={Board} />
          <Route path="/dashboard/:boardId" exact component={List} />
        </Fragment>
      </BrowserRouter>
    );
  }

}



export default App
