import './App.css'
import cloudLeft from "./assets/cloud-left.svg"
import cloudRight from "./assets/cloud-right.svg"
import cloudRightBtm from "./assets/cloud-right-btm.svg"
import cloudMiddle from "./assets/cloud-middle.svg"
import sun from "./assets/sun.svg"
import treesBack from "./assets/trees-back.svg"
import trees from "./assets/trees.svg"
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
    <div className='app'>
      <div className='container'>
      <div className='sun' />
      {/* <img className="background" src={picture} alt='' style={{width: '100%'}} /> */}
      <div className='trees-container'>
        <img className="trees" src={trees} alt='' style={{width: '100%'}} />
        <img className="trees-back" src={treesBack} alt='' style={{width: '100%'}} />
        <div className='scroll-background'>
        <Main />
        <Footer />
        </div>
      </div>
      <img className="sun" src={sun} alt='' style={{width: '20%'}}/>
      <img className="cloud-left" src={cloudLeft} alt='' style={{width: '20%'}} />
      <img className="cloud-right" src={cloudRight} alt='' style={{width: '25%'}} />
      <img className="cloud-right-btm" src={cloudRightBtm} alt='' style={{width: '25%'}} />
      <img className="cloud-middle" src={cloudMiddle} alt='' style={{width: '20%'}} />
      </div>
      
    
    </div>
  )
}

export default App
