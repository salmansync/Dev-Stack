import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const fetchCards = fetch('/technologies.json')
  .then(res => res.json())

function App() {


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Cards fetchCards={fetchCards}></Cards>
      <Footer></Footer>
    </>
  )
}

export default App