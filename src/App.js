import React from 'react';
import './App.css';
import Assignment2 from "./components/Assignment2";
// import data from './data/data.json';

//components
import Count from './components/counter';


let App = () => {
    return (
        <React.Fragment>
        <nav class="navbar sticky-top navbar-light bg-light">
        <a class="navbar-brand" href="#">Special DUA  Request (خصوصی دعا کی درخواست)</a>
      </nav>
                  <div class="fluid-container">
                  <div class="row">
                  <div class="col-md-4 col-lg-4 col-sm-4" >
                  {/* {data.counts.map(count => <Count key={count.id} data={count}/>)} */}
                  <Count/>
                  </div>
                  <div class="col-md-8 col-lg-8 col-sm-8">
                  <Assignment2/>
                  </div>
                  </div>
                  </div>
              </React.Fragment>
    )
};
export default App;
