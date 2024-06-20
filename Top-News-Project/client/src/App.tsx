import './App.css'
import MainPage from './components/Main/MainPage/MainPage'
import Navigation from './components/Main/Navigation/Navigation'
import SecondNavigation from './components/Main/SecondNavigation/SecondNavigation'
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
