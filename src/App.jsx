import { useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(()=>{
      fetch('http://localhost:4000/data')
      .then(r => r.json())
      .then(data => console.log(data))
  }, [])
  

  return (
    <div className="App">
      <Header />
      <Main quotes={quotes} />
      <Footer />
    </div>
  )
}

export default App
