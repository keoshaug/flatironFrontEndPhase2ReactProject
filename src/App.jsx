import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import NewCardForm from "./components/NewCardForm.jsx";
import Navbar from './components/Navbar';
import About from './components/About';
import Links from './components/Links';
import './App.css';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import root from '.';


function App() {

  switch(window.location.pathname) {

    case "./Main":
      Component = Home
    break;
    case "./About": 
      Component = About
    break;
    case "./Links":
      Component = Links

  }


  const [quotes, setQuotes] = useState([])

  useEffect(()=>{
      fetch('http://localhost:4000/data')
      .then(r => r.json())
      .then(setQuotes)
  }, [])

  function handleAddQuote (newQuote) {
    setQuotes([...quotes, newQuote])
  }

  return (
    <main className="App">
      <Navbar/>

        <Routes>
          <Route path='./Header' element={<Header/>}></Route>
          <Route path='./About' element={<About/>}></Route>
          <Route path='./Links' element={<Links/>}></Route>
        </Routes>

      <Header />
      <NewCardForm
       onAddQuote={handleAddQuote}
      />
      <Main quotes={quotes} setQuotes={setQuotes}/>
      <Footer />
    </main>
  )
}

export default App
