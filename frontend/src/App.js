import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CardView from './CardView';
import TableView from './TableView';
import Page from './Page';
// import Card from 'react-bootstrap/Card'

function App() {
  
  return (
    <div >
      <Router>
		<Routes>
      <Route path="/" element={<TableView/>}/>
			<Route path="/cardview" element={<CardView/>}/>
      <Route path="/pagination" element={<Page/>}/>
    </Routes>
    </Router>
            </div>
  )
}
  export default App;
