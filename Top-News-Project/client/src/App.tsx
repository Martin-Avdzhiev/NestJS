import './App.css'
import MainNews from './components/MainNews/MainNews'
import Navigation from './components/Navigation/Navigation'
import SecondNavigation from './components/SecondNavigation/SecondNavigation'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Navigation />
      <SecondNavigation />
      <Routes>
        <Route path='/' element={<MainNews />} />
      </Routes>
    </>
  )
}

export default App
