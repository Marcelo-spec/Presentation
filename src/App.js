import './App.css'
import Navbar from './components/Navbar'
import Main from './views/Main'
import Footer from './components/Footer'

function App () {
  return (
    <div className='App' style={{overflowX:"hidden"}}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
