import './App.css'
import MainPage from './components/MainPage/MainPage'
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
    </>
  )
}

export default App
