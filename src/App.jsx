import { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import React, { Component } from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddLink from './AddLink';
import ListLink from './ListLink';
import SearchBar from './Search';



function App() {

  // const link = {
  //   margin: "20px",
  //   textDecoration: "none",
  // };


  return (
    <div>
    <h1>Save Link</h1> 
    {/* const [links, setLinks] = useState([]);

    useEffect (() => {
      const savedLinks = JSON.parse(localStorage.getItem('links')) || '[]');
      setLinks(savedLinks);
    }, []); 

    useEffect(() => {
      localStorage.setItem('links', JSON.stringify(links));
    }, [links]);

    const handleSaveLink = (link) => {
      setLinks((prevLinks) => [...prevLinks, link]);
    };

    const handleDeleteLink = (index) => {
      setLinks((prevLinks) => {
        const newLinks = [...prevLinks];
        newLinks.splice(index, 1);
        return newLinks;
      });
    };
    */}



    <AddLink /> <br />
    <SearchBar /> <br />
    <ListLink />
    </div>
  )

  {/* <nav>
      <Link style={link} to="/"> Home </Link>
      <Link style={link} to="/add"> Add Link </Link>
    </nav>
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<AddLink />} />
      </Routes>
      </Router>
    </div> */}
}

export default App
