import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import SecondNavigation from './components/SecondNavigation/SecondNavigation';
import MainPage from './components/Main/MainPage/MainPage';
import Post from './components/Post/Post';

import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop';
import CategoriesPage from './components/Main/CategoriesPage/CategoriesPage';
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
            <Route path='/categories/:category' element={<CategoriesPage/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
