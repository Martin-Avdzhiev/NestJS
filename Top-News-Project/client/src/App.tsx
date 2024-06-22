import './App.css'
import Footer from './components/Footer/Footer'
import MainPage from './components/Main/MainPage/MainPage'
import Navigation from './components/Navigation/Navigation'
import SecondNavigation from './components/SecondNavigation/SecondNavigation'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Navigation />
      <SecondNavigation />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
