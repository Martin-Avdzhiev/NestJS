import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import SecondNavigation from './components/SecondNavigation/SecondNavigation';
import MainPage from './components/Main/MainPage/MainPage';
import Post from './components/Post/Post';

import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop';
function App() {

  return (
    <>
    <ScrollToTop/>
      <div className="page-container-wrapper">
        <div className="page-container">
          <Navigation />
          <SecondNavigation />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/post/:id' element={<Post/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
