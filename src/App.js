import React, { Fragment } from 'react';
import AreaList from './components/AreaList';
import AreaForm from './components/AreaForm';
import Header from './components/Header';
import AreaListContext from "./context/AreaListContext";

function App() {
  return (
    <Fragment>
      <AreaListContext>
      <div className="container">
        <div className="app-wrapper">
          <Header/>
          <div className="main">
             <AreaForm/>
             <AreaList/>
          </div>  
        </div>
      </div>
      </AreaListContext>
    </Fragment>
  );
}

export default App;
