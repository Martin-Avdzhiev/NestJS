import './App.css'
import Footer from './components/Footer/Footer'
import MainPage from './components/Main/MainPage/MainPage'
import Navigation from './components/Navigation/Navigation'
import SecondNavigation from './components/SecondNavigation/SecondNavigation'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <div className="page-container-wrapper">
        <div className="page-container">
          <Navigation />
          <SecondNavigation />
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
