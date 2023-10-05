import { useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import NewCardForm from "./components/NewCardForm.jsx";
import './App.css';
import { Component } from 'react';


function App() {

  switch(window.location.pathname) {

    case "./":
      Component = Home
    break;
    case "./About": 
      Component = About
    break;
    case "./Footer":
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
